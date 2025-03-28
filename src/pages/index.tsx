// app/page.tsx
"use client";

import { Box } from "@mui/material";
import "../styles/globals.css";
import LikeButton from "../components/LikeButton";
import TextBlock from "../components/TextBlock";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import Biography from "../components/Biography"; // Импортируем компонент Biography
import biographyText from "../data/biographyText.js"; // Импортируем текст биографии
import SocialLinks from "../components/SocialLinks";  // Добавляем импорт SocialLinks

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: 4,
          width: "100vw", // Добавляем 100% ширины экрана
          padding: 0, // Убираем внутренние отступы
          margin: 0, // Убираем внешние отступы
        }}
      >
        {/* Компонент с картинкой */}
        <ImageCard />

        {/* Блок с текстом */}
        <Box sx={{ maxWidth: 500, position: "relative", padding: 2 }}>
          <TextBlock
            title="Милана Хаметова"
            content="Популярная блогерша, певица и TikTok-звезда. Успешно развивает свою карьеру в социальных сетях и вдохновляет миллионы подписчиков."
          />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <LikeButton />
          </Box>
        </Box>
      </Box>

      {/* Блок с биографией */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 3,
          overflowY: "auto", // Для прокрутки в случае длинной биографии
        }}
      >
        {/* Отображаем биографию */}
        <Biography content={biographyText} />
      </Box>

      {/* Блок с соцсетями */}
      <SocialLinks />

      {/* Добавляем футер внизу */}
      <Footer />
    </>
  );
}
