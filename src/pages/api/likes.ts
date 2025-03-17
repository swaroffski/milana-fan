import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "likes.json");

// Функция для чтения лайков
const getLikes = (): number => {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify({ count: 0 }));
        }
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data).count;
    } catch (error) {
        console.error("Ошибка чтения лайков:", error);
        return 0;
    }
};

// Функция для сохранения лайков
const saveLikes = (count: number) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify({ count }));
    } catch (error) {
        console.error("Ошибка сохранения лайков:", error);
    }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json({ count: getLikes() });
    } else if (req.method === "POST") {
        const newCount = getLikes() + 1;
        saveLikes(newCount);
        res.status(200).json({ count: newCount });
    } else {
        res.status(405).json({ error: "Метод не поддерживается" });
    }
}
