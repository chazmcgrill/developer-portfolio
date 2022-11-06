import React from 'react';
import styles from '../styles/Footer.module.sass';
import Nav from './Nav';
import SocialIcons from './SocialIcons';

const Footer = () => (
    <div className={styles.footer}>
        <hr />
        <div className={styles.footerContent}>
            <div>
                <h4>Charlie Taylor</h4>
                <p>Lorem ipsum, dolor sit amet.</p>
                <SocialIcons />
            </div>
            <div>
                <Nav />
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </div>
);

export default Footer;
