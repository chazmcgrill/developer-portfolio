import React from 'react';
import styles from '../styles/Bio.module.sass';

const BioSection = () => {
    return (
        <section className={styles.bioSection}>
            <div className={styles.bioSectionText}>
                <h1>Fuga beatae ducimus dolor, ipsum molestiae a magnam. Modi, beatae alias.</h1>
                <button>Find out more</button>
            </div>
            <div>
                <div className={styles.bioImage}></div>
            </div>
        </section>
    );
};

export default BioSection;
