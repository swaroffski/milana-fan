"use client";

import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function LikeButton() {
    const [likeCount, setLikeCount] = useState<number>(0);

    useEffect(() => {
        async function fetchLikes() {
            try {
                const res = await fetch("/api/likes");
                const data = await res.json();
                setLikeCount(data.count);
            } catch (error) {
                console.error("Ошибка загрузки лайков:", error);
            }
        }
        fetchLikes();
    }, []);

    const handleLike = async () => {
        try {
            const res = await fetch("/api/likes", { method: "POST" });
            const data = await res.json();
            setLikeCount(data.count);
        } catch (error) {
            console.error("Ошибка при отправке лайка:", error);
        }
    };

    return (
        <Button
            onClick={handleLike}
            variant="contained"
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffe6e6",
                color: "#e0245e",
                padding: "4px 8px",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                fontSize: "0.75rem",
                textTransform: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                "&:hover": { backgroundColor: "#ffcccc" },
            }}
        >
            <Typography variant="body2" sx={{ mr: 0.5 }}>{likeCount}</Typography>
            <FavoriteIcon sx={{ fontSize: 18 }} />
        </Button>
    );
}
