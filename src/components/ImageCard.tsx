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

  // Функция для анимации растворения и смены изображения
  const animateTransition = (newIndex: number) => {
    if (imageContainerRef.current) {
      const image = imageContainerRef.current.querySelector('img');

      if (image) {
        // Анимация растворения картинки
        gsap.to(image, {
          duration: 1,
          opacity: 0,
          ease: "power2.out",
          onComplete: () => {
            // После завершения растворения, меняем картинку
            setCurrentIndex(newIndex);
            gsap.set(image, { opacity: 1 }); // Сбрасываем opacity
          },
        });
      }
    } else {
      setCurrentIndex(newIndex);
    }
  };

  // Смена изображения
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
            transition: "opacity 0.5s ease-in-out", // Плавное появление нового изображения
          }}
        />
      </Box>
    </Box>
  );
}
