// components/Footer.tsx
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#333",
                color: "white",
                padding: "20px",
                textAlign: "center",
                position: "relative",
                bottom: 0,
                width: "100%",
                fontSize: "6px",
            }}
        >
            <Typography>
                Сайт разработан на исходном открытом коде. Javascript + Node.js + react{" "}
                <Link href="https://github.com/swaroffski/milana-fan" target="_blank" color="inherit">
                    GitHub
                </Link>
            </Typography>
            <Typography>
                Created by{" "}
                <Link href="https://t.me/existas" target="_blank" color="inherit">
                    Swaroffski
                </Link>
            </Typography>
        </Box>
    );
}
