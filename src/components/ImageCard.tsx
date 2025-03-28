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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  // Функция плавного перехода с использованием GSAP
  const animateTransition = (newIndex: number) => {
    if (imageContainerRef.current) {
      const direction = Math.random() > 0.5 ? 1 : -1; // Случайное направление (влево/вправо)
      gsap.to(imageContainerRef.current, {
        duration: 0.7,
        x: direction * 200, // Отлет в сторону
        opacity: 0,
        scale: 0.7,
        ease: "power2.out",
        onComplete: () => {
          // Обновляем индекс изображения после анимации выхода
          setCurrentIndex(newIndex);
          // Сброс позиции и восстановление видимости для анимации входа
          gsap.set(imageContainerRef.current, { x: -direction * 200, scale: 0.7 });
          gsap.to(imageContainerRef.current, {
            duration: 0.7,
            x: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.in",
          });
        },
      });
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const changeImage = () => {
    let newIndex = Math.floor(Math.random() * images.length);
    if (newIndex === currentIndex) {
      newIndex = (currentIndex + 1) % images.length;
    }
    animateTransition(newIndex);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(changeImage, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleImageClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    changeImage();
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
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
}
