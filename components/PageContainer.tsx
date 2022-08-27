import React, { ReactNode } from 'react';
import Head from 'next/head';

interface PageContainerProps {
    children: ReactNode;
    // TODO: allow passing of meta data as props
    pageMeta?: {};
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <div>
            <Head>
                {/* TODO: pass actual meta info and icon */}
                <title>Title goes here</title>
                <meta name="description" content="Description goes here" />
                <link rel="icon" href="/favicon.ico" />
                {/* TODO: twitter meta info */}
            </Head>
            <main>
                <h1>header</h1>
                {children}
                <h1>footer</h1>
            </main>
        </div>
    );
};

export default PageContainer;
