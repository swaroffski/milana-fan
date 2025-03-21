import '@fontsource/montserrat';
import Footer from '../components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Фан-сайт Миланы Хаметовой</title>
            </head>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}