import React from 'react';
import styles from '../styles/Footer.module.sass';
import config from '../utils/config';
import Nav from './Nav';
import SocialIcons from './SocialIcons';

const getYear = () => new Date().getFullYear();

const Footer = () => (
    <div className={styles.footer}>
        <hr />
        <div className={styles.footerContent}>
            <div className={styles.footerTitle}>
                <h4>Charlie Taylor</h4>
                <p>Creative full stack developer.</p>
                <SocialIcons />
            </div>
            <div className={styles.footerNav}>
                {config.features.pages && <Nav />}
                <p className={styles.footerNavCopyright}>{`© ${getYear()} Charlie Taylor, All rights reserved.`}</p>
            </div>
        </div>
    </div>
);

export default Footer;
