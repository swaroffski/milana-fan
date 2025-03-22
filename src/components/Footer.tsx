import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#333",
                color: "white",
                padding: "5px 10px", // уменьшенные отступы
                textAlign: "center",
                position: "relative",
                bottom: 0,
                width: "100%",
                fontSize: "6px", // мелкий текст
                display: "flex",
                justifyContent: "space-between", // текст по краям
                alignItems: "center",
                height: "30px", // уменьшенная высота футера
            }}
        >
            <Typography sx={{ fontSize: "6px", textAlign: "left" }}>
                Сайт разработан на исходном открытом коде. Javascript + Node.js + React{" "}
                <Link href="https://github.com/swaroffski/milana-fan" target="_blank" color="inherit">
                    GitHub
                </Link>
            </Typography>
            <Typography sx={{ fontSize: "6px", textAlign: "right" }}>
                Created by{" "}
                <Link href="https://t.me/existas" target="_blank" color="inherit">
                    Swaroffski
                </Link>
            </Typography>
        </Box>
    );
}
