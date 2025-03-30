const isTruthy = (envVariable?: string) => envVariable === 'true';

const config = {
    meta: {
        url: 'https://charlietaylor.dev',
        title: 'Charlie Taylor Dev Portfolio',
        description: 'The dev portfolio for Charlie Taylor - Full stack software developer with creative skills.',
        socialIconSrc: '/social-icon.png',
    },
    twitterDirectMessageHref: 'https://twitter.com/messages/compose?recipient_id=828212805992067072',
    projects: [
        {
            id: 1,
            title: 'Coinage web app',
            description: 'Simple cryptocurrency price tracking app built with React and Cryptocompare API.',
            siteHref: 'https://chazmcgrill.github.io/coinage/',
            height: 500,
            imageSrc: 'public/project-images/coinage.png',
        },
        {
            id: 2,
            title: 'Bugsweeper Game',
            description: "Recreation of the classic Windows desktop game Minesweeper. Built using React featuring a 'flood fill' algorithm.",
            siteHref: 'https://chazmcgrill.github.io/bugsweeper',
            height: 400,
            imageSrc: 'public/project-images/bugsweeper.png',
        },
        {
            id: 3,
            title: 'Cell automaton',
            description: "React project based on the cellular automaton 'Game of Life' devised by mathematician John Conway.",
            siteHref: 'https://chazmcgrill.github.io/cell-automaton/',
            height: 400,
            imageSrc: 'public/project-images/cell-automaton.png',
        },
        {
            id: 4,
            title: 'Illustration website',
            description: 'Personal illustration portfolio built using Nextjs, featuring a gallery, shop and contact form.',
            siteHref: 'https://hurricanecharlie.co.uk/',
            height: 500,
            imageSrc: 'public/project-images/hurricane-charlie.png',
        },
    ],
    features: {
        pages: isTruthy(process.env.NEXT_PUBLIC_FEATURE_PAGES),
    },
};

export default config;
