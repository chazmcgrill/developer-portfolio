import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageContainerProps {
    children: ReactNode;
    // TODO: allow passing of meta data as props
    pageMeta?: {};
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <>
            <Head>
                {/* TODO: pass actual meta info and icon */}
                <title>Charlie Taylor - Dev Portfolio</title>
                <meta name="description" content="Description goes here" />
                <link rel="icon" href="/favicon.ico" />
                {/* TODO: twitter meta info */}
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
