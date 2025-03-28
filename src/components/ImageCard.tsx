"use client";

import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import gsap from "gsap";

const images: string[] = [
  "/images/milana0.jpg",
  "/images/milana1.jpg",
  "/images/milana2.jpg",
  "/images/milana3.jpg",
  "/images/milana4.jpg",
  "/images/milana5.jpg",
  "/images/milana6.jpg",
];

export default function ImageCard() {
  // Храним индекс текущего изображения
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // Ссылка на контейнер с изображением для анимации
  const imageContainerRef = useRef<HTMLDivElement>(null);
  // ID интервала для автоматической смены
  const intervalRef = useRef<number | null>(null);

  // Функция плавного перехода с использованием GSAP
  const animateTransition = (newIndex: number) => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        duration: 0.5,
        x: 100,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
          // Обновляем индекс изображения после анимации выхода
          setCurrentIndex(newIndex);
          // Сброс позиции для анимации входа
          gsap.set(imageContainerRef.current, { x: -100 });
          gsap.to(imageContainerRef.current, {
            duration: 0.5,
            x: 0,
            opacity: 1,
            ease: "power2.in",
          });
        },
      });
    } else {
      setCurrentIndex(newIndex);
    }
  };

  // Функция выбора следующего изображения, равномерно распределённого и не совпадающего с текущим
  const changeImage = () => {
    let newIndex = Math.floor(Math.random() * images.length);
    if (newIndex === currentIndex) {
      newIndex = (currentIndex + 1) % images.length;
    }
    animateTransition(newIndex);
  };

  // Запускаем автоматическую смену изображений
  useEffect(() => {
    intervalRef.current = window.setInterval(changeImage, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // Не включаем currentIndex в зависимости, чтобы не сбрасывать интервал при каждом изменении
  }, []);

  // Обработчик клика: сбрасывает интервал и сразу меняет изображение
  const handleImageClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    changeImage();
    // Перезапускаем интервал
    intervalRef.current = window.setInterval(changeImage, 3000);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "40%" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        ref={imageContainerRef}
        sx={{
          width: 300,
          height: 400,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={handleImageClick}
      >
        <Image
          src={images[currentIndex]}
          alt="Милана Хаметова"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}
