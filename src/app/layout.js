// app/layout.js
import '@fontsource/montserrat'
export default function Layout({ children }) {
    return (
        <html lang="ru">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Фан-сайт Миланы Хаметовой</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
