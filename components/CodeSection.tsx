import React from 'react';
import styles from '../styles/CodeSection.module.sass';
import SectionHeader from './SectionHeader';

const CodeSection = () => {
    return (
        <section className={styles.codeSection}>
            <SectionHeader title="Code" buttonText="view on github" buttonHref="https://github.com/chazmcgrill?tab=repositories" />
        </section>
    );
};

export default CodeSection;
