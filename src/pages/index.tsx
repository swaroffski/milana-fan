"use client";

import { useState, useEffect } from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import Image from "next/image";
import LikeButton from "../components/LikeButton";


const images: string[] = [
    "/images/milana0.jpg",
    "/images/milana1.jpg",
    "/images/milana2.jpg",
    "/images/milana3.jpg",
    "/images/milana4.jpg",
    "/images/milana5.jpg",
    "/images/milana6.jpg",
    "/images/milana7.jpg",
    "/images/milana8.jpg",
    "/images/milana9.jpg"
];

export default function Home() {
    const [currentImage, setCurrentImage] = useState<string>(images[0]);
    const [imageScale, setImageScale] = useState<number>(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const handleImageClick = () => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    };

    const handleImageMouseDown = () => setImageScale(1.1);
    const handleImageMouseUp = () => setImageScale(1);

    return (
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
            <Box
                sx={{
                    width: { xs: "100%", md: "40%" },
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: 300,
                        height: 400,
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                    }}
                    onClick={handleImageClick}
                    onMouseDown={handleImageMouseDown}
                    onMouseUp={handleImageMouseUp}
                >
                    <Image
                        src={currentImage}
                        alt="Милана Хаметова"
                        fill
                        style={{
                            objectFit: "contain",
                            transition: "transform 0.2s ease-in-out",
                            transform: `scale(${imageScale})`,
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ maxWidth: 500, position: "relative", padding: 2 }}>
                <Paper
                    sx={{
                        padding: 3,
                        backgroundColor: "#f9f9f9",
                        borderRadius: 2,
                        boxShadow: 3,
                        opacity: 0,
                        animation: "fadeIn 1.5s ease-in-out forwards",
                        "@keyframes fadeIn": {
                            "0%": { opacity: 0 },
                            "100%": { opacity: 1 },
                        },
                    }}
                >
                    <Typography variant="h4" fontWeight="bold">
                        Милана Хаметова
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Популярный блогер, певица и TikTok-звезда. Успешно развивает свою карьеру в социальных сетях и вдохновляет миллионы подписчиков.
                    </Typography>
                </Paper>

                <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                    <LikeButton />
                </Box>
            </Box>
        </Container>
    );
}