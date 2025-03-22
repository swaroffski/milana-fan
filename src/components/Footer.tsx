// components/Footer.tsx
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#333",
                color: "white",
                padding: "5px 15px", // Минимальная высота
                position: "relative",
                bottom: 0,
                width: "100%",
                fontSize: "5px", // Мелкий шрифт для всех элементов
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end", // Прижимаем текст к низу футера
            }}
        >
            {/* Левая часть: три строки */}
            <Box sx={{ textAlign: "left", lineHeight: "1.2" }}>
                <Typography sx={{ fontSize: "5px" }}>Открытый исходный код</Typography>
                <Typography sx={{ fontSize: "5px" }}>Javascript + Node.js + React</Typography>
                <Link
                    href="https://github.com/swaroffski/milana-fan"
                    target="_blank"
                    color="inherit"
                    sx={{ fontSize: "5px" }}
                >
                    GitHub
                </Link>
            </Box>

            {/* Правая часть */}
            <Box sx={{ textAlign: "right" }}>
                <Typography sx={{ fontSize: "5px" }}>
                    Created by{" "}
                    <Link href="https://t.me/existas" target="_blank" color="inherit" sx={{ fontSize: "5px" }}>
                        Swaroffski
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}
