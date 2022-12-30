const isTruthy = (envVariable?: string) => envVariable === 'true';

const config = {
    features: {
        pages: isTruthy(process.env.NEXT_PUBLIC_FEATURE_PAGES),
    },
};

export default config;
