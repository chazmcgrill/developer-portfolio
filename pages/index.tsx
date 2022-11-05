import type { NextPage } from 'next';
import HomePage from '../components/HomePage';
import PageContainer from '../components/PageContainer';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <PageContainer>
            <HomePage />
        </PageContainer>
    );
};

export default Home;
