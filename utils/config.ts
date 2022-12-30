const isTruthy = (envVariable?: string) => envVariable === 'true';

const config = {
    twitterDirectMessageHref: 'https://twitter.com/messages/compose?recipient_id=828212805992067072',
    projects: [
        { id: 1, title: 'Project title 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', height: 500 },
        { id: 2, title: 'Project title 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', height: 400 },
        { id: 3, title: 'Project title 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', height: 400 },
        { id: 4, title: 'Project title 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', height: 500 },
    ],
    features: {
        pages: isTruthy(process.env.NEXT_PUBLIC_FEATURE_PAGES),
    },
};

export default config;
