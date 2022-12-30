import React from 'react';
import styles from '../styles/ProjectsSection.module.sass';
import config from '../utils/config';
import SectionHeader from './SectionHeader';

interface ProjectItemProps {
    title: string;
    description: string;
    height: number;
}

const ProjectItem = ({ title, description, height }: ProjectItemProps) => (
    <div className={styles.projectItem}>
        <div className={styles.projecItemImage} style={{ height }}></div>
        <h3>{title}</h3>
        <small>{description}</small>
    </div>
);

const ProjectsSection = () => {
    return (
        <section className={styles.projectsSection}>
            <SectionHeader title="Projects" buttonText={config.features.pages ? 'view all' : undefined} buttonHref="/projects" />

            <div className={styles.projectGrid}>
                {config.projects.map((project) => (
                    <ProjectItem key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
