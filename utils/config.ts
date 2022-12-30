const isTruthy = (envVariable?: string) => envVariable === 'true';

const config = {
    twitterDirectMessageHref: 'https://twitter.com/messages/compose?recipient_id=828212805992067072',
    features: {
        pages: isTruthy(process.env.NEXT_PUBLIC_FEATURE_PAGES),
    },
};

export default config;
