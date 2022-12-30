import React from 'react';
import styles from '../styles/BioSection.module.sass';

const BioSection = () => {
    return (
        <section className={styles.bioSection}>
            <div className={styles.bioSectionText}>
                <h1>Innovative full stack developer with a mix of technical and creative skills.</h1>
                <button>Talk to me</button>
            </div>
            <div>
                <div className={styles.bioImage}></div>
            </div>
        </section>
    );
};

export default BioSection;
