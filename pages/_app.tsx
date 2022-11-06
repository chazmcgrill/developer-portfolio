import '../styles/globals.sass';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

// TODO: limit weights to required
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} className={inter.className} />;
}

export default MyApp;
