import React from 'react';

interface HomeProps {}

const HomePage = ({ ...props }: HomeProps) => {
    console.log(props);
    return <h1>Home Page</h1>;
};

export default HomePage;
