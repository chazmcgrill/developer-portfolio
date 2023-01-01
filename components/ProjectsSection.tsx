import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/ProjectsSection.module.sass';
import config from '../utils/config';
import SectionHeader from './SectionHeader';

interface ProjectItemProps {
    title: string;
    description: string;
    height: number;
    siteHref: string;
    imageSrc: string;
}

const ProjectItem = ({ title, description, height, siteHref, imageSrc }: ProjectItemProps) => (
    <a href={siteHref} target="_blank" rel="noreferrer">
        <div className={styles.projectItem}>
            <div className={styles.projecItemImage} style={{ height }}>
                <Image
                    alt={title}
                    src={imageSrc}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <h4>{title}</h4>
            <small>{description}</small>
        </div>
    </a>
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
