import React from 'react';
import styles from '../styles/Footer.module.sass';
import SocialIcons from './SocialIcons';

const Footer = () => (
    <div className={styles.footer}>
        <hr />
        <h4>Charlie Taylor</h4>
        <p>Lorem ipsum, dolor sit amet.</p>
        <SocialIcons />
    </div>
);

export default Footer;
