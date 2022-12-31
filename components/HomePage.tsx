import React from 'react';
import BioSection from './BioSection';
import CodeSection from './CodeSection';
import ProjectsSection from './ProjectsSection';

const HomePage = () => {
    return (
        <>
            <BioSection />
            <ProjectsSection />
            <CodeSection />
        </>
    );
};

export default HomePage;
