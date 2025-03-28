// components/SocialLinks.tsx
import { Box, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";

const SocialLinks: React.FC = () => {
  const [socialCounts, setSocialCounts] = useState({
    instagram: 0,
    twitter: 0,
    youtube: 0,
  });

  // Функция для обновления данных (будет вызываться раз в определённое время)
  const fetchSocialCounts = async () => {
    // Пример использования стороннего API или вашего собственного.
    // Например, можно использовать API или сторонний сервис для получения числа подписчиков.
    // Вот условный код для этого:

    // Пример асинхронных запросов
    // const instagramResponse = await fetch('https://api.instagram.com/...');
    // const instagramData = await instagramResponse.json();
    // setSocialCounts(prev => ({ ...prev, instagram: instagramData.followers }));

    // Для примера можно использовать статические данные:
    setSocialCounts({
      instagram: 10234, // Примерное количество подписчиков
      twitter: 12000,
      youtube: 80000,
    });
  };

  useEffect(() => {
    fetchSocialCounts();
    const intervalId = setInterval(fetchSocialCounts, 60000); // обновление раз в минуту
    return () => clearInterval(intervalId); // очистка по завершению
  }, []);

  return (
    <Box sx={{ textAlign: "center", padding: 3, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Подписчики в социальных сетях
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
        <Box>
          <Typography variant="body1">Instagram</Typography>
          <Typography variant="h6">{socialCounts.instagram}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">Twitter</Typography>
          <Typography variant="h6">{socialCounts.twitter}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">YouTube</Typography>
          <Typography variant="h6">{socialCounts.youtube}</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Присоединяйтесь:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Link href="https://www.instagram.com" target="_blank">
            Instagram
          </Link>
          <Link href="https://twitter.com" target="_blank">
            Twitter
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            YouTube
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
