import { Paper, Typography } from "@mui/material";

interface TextBlockProps {
  title: string;
  content: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, content }) => {
  return (
    <Paper
      sx={{
        padding: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
        opacity: 0,
        textAlign: "center", // Выровняет текст по центру
        animation: "fadeIn 1.5s ease-in-out forwards",
        "@keyframes fadeIn": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {content}
      </Typography>
    </Paper>
  );
};

export default TextBlock;