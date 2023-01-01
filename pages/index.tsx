import type { NextPage } from 'next';
import HomePage from '../components/HomePage';
import PageContainer from '../components/PageContainer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Home: NextPage = () => {
    return (
        <PageContainer>
            <HomePage />
        </PageContainer>
    );
};

export default Home;
