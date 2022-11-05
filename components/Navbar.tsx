import React from 'react';
import styles from '../styles/Navbar.module.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    // TODO: use routing to determine which page we are on
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <h3>Charlie Taylor</h3>
                <h4>Full Stack Developer</h4>
            </div>

            <div>
                <span className={styles.navItem}>about</span>
                <span className={styles.navItem}>projects</span>
                <span className={styles.navItem}>contact</span>
            </div>

            <div className={styles.icons}>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
    );
};

export default Navbar;
