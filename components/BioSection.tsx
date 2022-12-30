import React from 'react';
import styles from '../styles/BioSection.module.sass';
import config from '../utils/config';

const BioSection = () => {
    return (
        <section className={styles.bioSection}>
            <div className={styles.bioSectionText}>
                <h1>Innovative full stack developer with a mix of technical and creative skills.</h1>
                <a href={config.twitterDirectMessageHref} target="_blank" rel="noreferrer">
                    <button>Talk to me</button>
                </a>
            </div>
            <div>
                <div className={styles.bioImage}></div>
            </div>
        </section>
    );
};

export default BioSection;
