import React from 'react';
import styles from '../styles/Projects.module.sass';
import SectionHeader from './SectionHeader';

const ProjectsSection = () => {
    return (
        <section className={styles.projectsSection}>
            <SectionHeader title="Projects" buttonText="view all" onClickButton={() => {}} />

            <div className={styles.projectGrid}>
                <div className={styles.projectItem}>
                    <div className={styles.projecItemImage} style={{ height: 500 }}></div>
                    <h3>Project title 1</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                </div>
                <div className={styles.projectItem}>
                    <div className={styles.projecItemImage} style={{ height: 400 }}></div>
                    <h3>Project title 2</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                </div>
                <div className={styles.projectItem}>
                    <div className={styles.projecItemImage} style={{ height: 400 }}></div>
                    <h3>Project title 3</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                </div>
                <div className={styles.projectItem}>
                    <div className={styles.projecItemImage} style={{ height: 500 }}></div>
                    <h3>Project title 4</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
