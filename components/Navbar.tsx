import React from 'react';
import styles from '../styles/Navbar.module.sass';

const Navbar = () => {
    // TODO: use routing to determine which page we are on
    return (
        <div className={styles.navbar}>
            <h3>Charlie Taylor</h3>

            <div>
                <span className={styles.nav}>about</span>
                <span className={styles.nav}>projects</span>
                <span className={styles.nav}>contact</span>
            </div>

            <span>light/dark</span>
        </div>
    );
};

export default Navbar;
