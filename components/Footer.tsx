import React from 'react';
import styles from '../styles/Footer.module.sass';
import Nav from './Nav';
import SocialIcons from './SocialIcons';

const Footer = () => (
    <div className={styles.footer}>
        <hr />
        <div className={styles.footerContent}>
            <div className={styles.footerTitle}>
                <h4>Charlie Taylor</h4>
                <p>Lorem ipsum, dolor sit amet.</p>
                <SocialIcons />
            </div>
            <div className={styles.footerNav}>
                <Nav />
                <p>© 2022 Charlie Taylor, All rights reserved.</p>
            </div>
        </div>
    </div>
);

export default Footer;
