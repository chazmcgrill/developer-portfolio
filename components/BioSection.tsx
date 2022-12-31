import React from 'react';
import Image from 'next/image';
import styles from '../styles/BioSection.module.sass';
import config from '../utils/config';

const BioSection = () => {
    return (
        <section className={styles.bioSection}>
            <div className={styles.bioImage}>
                <Image
                    alt="Bio image"
                    src={require('../public/bio-image.jpg')}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        borderRadius: 16,
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className={styles.bioSectionText}>
                <h1>Innovative full stack developer with a mix of technical and creative skills.</h1>
                <a href={config.twitterDirectMessageHref} target="_blank" rel="noreferrer">
                    <button>Talk to me</button>
                </a>
            </div>
        </section>
    );
};

export default BioSection;
