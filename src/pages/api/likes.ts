// /pages/api/likes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Путь к файлу, который будет использоваться для хранения лайков
const filePath = path.join(process.cwd(), 'likes.json');

// Обработчик запросов API
export default (req: NextApiRequest, res: NextApiResponse) => {
  // Метод GET — читаем данные из файла
  if (req.method === 'GET') {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        // Если произошла ошибка, возвращаем 500 и сообщение об ошибке
        res.status(500).json({ error: 'Failed to read file' });
        return;
      }
      try {
        // Отправляем данные из файла как JSON
        res.status(200).json(JSON.parse(data));
      } catch (parseError) {
        // Если ошибка при парсинге JSON, возвращаем 500
        res.status(500).json({ error: 'Error parsing file data' });
      }
    });
  }
  // Метод POST — записываем данные в файл
  else if (req.method === 'POST') {
    const newLike = req.body;

    // Проверка на наличие новых данных
    if (!newLike) {
      res.status(400).json({ error: 'No data provided' });
      return;
    }

    fs.writeFile(filePath, JSON.stringify(newLike, null, 2), (err) => {
      if (err) {
        // Если ошибка записи, возвращаем 500
        res.status(500).json({ error: 'Failed to write file' });
        return;
      }
      // Возвращаем успешный ответ
      res.status(200).json({ message: 'File updated successfully' });
    });
  } else {
    // Если метод не GET и не POST, возвращаем 405 (Method Not Allowed)
    res.status(405).json({ error: 'Method not allowed' });
  }
};
