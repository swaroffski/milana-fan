// components/Footer.tsx
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#333",
                color: "white",
                padding: "10px 20px", // Сделал ещё меньше по высоте
                textAlign: "center",
                position: "relative",
                bottom: 0,
                width: "100%",
                fontSize: "5px", // Ещё чуть меньше шрифт
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            {/* Левая часть: три строки */}
            <Box sx={{ textAlign: "left" }}>
                <Typography>Открытый исходный код</Typography>
                <Typography>Javascript + Node.js + React</Typography>
                <Link
                    href="https://github.com/swaroffski/milana-fan"
                    target="_blank"
                    color="inherit"
                >
                    GitHub
                </Link>
            </Box>

            {/* Правая часть */}
            <Box sx={{ textAlign: "right" }}>
                <Typography>
                    Created by{" "}
                    <Link href="https://t.me/existas" target="_blank" color="inherit">
                        Swaroffski
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}
