const isTruthy = (envVariable?: string) => envVariable === 'true';

const config = {
    twitterDirectMessageHref: 'https://twitter.com/messages/compose?recipient_id=828212805992067072',
    projects: [
        {
            id: 1,
            title: 'Coinage web app',
            description: 'Simple cryptocurrency price tracking app built with React and Cryptocompare API.',
            siteHref: 'https://coinage.charlietaylorcoder.com/',
            height: 500,
        },
        {
            id: 2,
            title: 'Bugsweeper Game',
            description: "Recreation of the classic Windows desktop game Minesweeper. Built using React featuring a 'flood fill' algorithm.",
            siteHref: 'https://bugsweeper.charlietaylorcoder.com/',
            height: 400,
        },
        {
            id: 3,
            title: 'Cell automaton',
            description: "React project based on the cellular automaton 'Game of Life' devised by mathematician John Conway.",
            siteHref: 'https://cell-automaton.charlietaylorcoder.com/',
            height: 400,
        },
        {
            id: 4,
            title: 'Illustration website',
            description: 'Personal illustration portfolio includes the use of React, React-router, Node, Express and CSS grid.',
            siteHref: 'https://www.hurricanecharlie.co.uk/',
            height: 500,
        },
    ],
    features: {
        pages: isTruthy(process.env.NEXT_PUBLIC_FEATURE_PAGES),
    },
};

export default config;
