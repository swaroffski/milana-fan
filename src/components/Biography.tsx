// components/Biography.tsx
import { Box, Typography } from "@mui/material";

interface BiographyProps {
  content: string;
}

const Biography: React.FC<BiographyProps> = ({ content }) => {
  return (
    <Box
      sx={{
        maxWidth: 800,
        padding: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
        overflowY: "auto", // Для прокрутки в случае длинной биографии
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Центрируем содержимое по горизонтали
        justifyContent: "center", // Центрируем по вертикали
        textAlign: "center", // Центрируем текст
        opacity: 0,
        animation: "fadeIn 1.5s ease-in-out forwards", // Анимация плавного появления
        "@keyframes fadeIn": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem", // Приводим размер текста к тому же стилю, что в первом блоке
          lineHeight: 1.6, // Для улучшения читаемости
          color: "text.secondary", // Мягкое отображение текста
          maxWidth: "100%", // Сохраняем ширину в пределах контейнера
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default Biography;
