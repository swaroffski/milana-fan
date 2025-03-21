// app/page.tsx
"use client";

import { Container, Box } from "@mui/material";
import LikeButton from "../components/LikeButton";
import TextBlock from "../components/TextBlock";
import ImageCard from "../components/ImageCard";  // Теперь это отдельный компонент!
import Footer from "../components/Footer"; // Импортируем футер

export default function Home() {
    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    gap: 4,
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
            </Container>

            {/* Добавляем футер внизу */}
            <Footer />
        </>
    );
}
