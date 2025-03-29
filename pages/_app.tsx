import '../styles/globals.sass';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: ['200', '300', '400'],
    style: ['normal'],
    subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} className={inter.className} />;
}

export default MyApp;
