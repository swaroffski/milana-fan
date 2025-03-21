"use client";

import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

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

export default function ImageCard() {
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

    return (
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
                onMouseDown={() => setImageScale(1.1)}
                onMouseUp={() => setImageScale(1)}
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
    );
}
