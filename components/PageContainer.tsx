import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import config from '../utils/config';

interface PageMeta {
    titleSuffix?: string;
    description?: string;
    articleDate?: string;
}

interface PageContainerProps {
    children: ReactNode;
    pageMeta?: PageMeta;
}

const PageContainer = ({ children, pageMeta }: PageContainerProps) => {
    const router = useRouter();

    const siteTitle = `${config.meta.title} - ${pageMeta?.titleSuffix || 'Home'}`;
    const siteDescription = pageMeta?.description || config.meta.description;
    const articleDate = pageMeta?.articleDate;
    const currentRoute = `${config.meta.url}${router.asPath}`;

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={siteDescription} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="msapplication-config" content="none" />
                <link rel="canonical" href={currentRoute} />

                {/* facebook open graph meta data for social links */}
                <meta property="og:url" content={currentRoute} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={config.meta.title} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:image" content={config.meta.socialIconSrc} />

                {/* twitter card meta data for social links */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@charlietdev" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:image" content={config.meta.socialIconSrc} />

                {/* for use if we have dated articles (optional) */}
                {articleDate && <meta property="article:published_time" content={articleDate} />}
            </Head>
            <main>
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    );
};

export default PageContainer;
