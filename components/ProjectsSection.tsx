import React from 'react';
import styles from '../styles/Projects.module.sass';

const ProjectsSection = () => {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.projectsHeader}>
                <h2>Projects</h2>
                <button>view all</button>
            </div>

            <div className={styles.projectItem}>
                <div className={styles.projecItemHeader}>
                    <h3>Title 1</h3>
                </div>
                <div className={styles.projecItemImage}></div>
            </div>
            <div className={styles.projectItem}>
                <div className={styles.projecItemHeader}>
                    <h3>Title 1</h3>
                </div>
                <div className={styles.projecItemImage}></div>
            </div>
            <div className={styles.projectItem}>
                <div className={styles.projecItemHeader}>
                    <h3>Title 1</h3>
                </div>
                <div className={styles.projecItemImage}></div>
            </div>
        </section>
    );
};

export default ProjectsSection;
