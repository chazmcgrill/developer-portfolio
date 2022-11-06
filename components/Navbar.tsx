import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Navbar.module.sass';

const getNavItemClass = (pathname: string, currentPathName: string) => {
    if (pathname === currentPathName) return styles.selectedNavItem;
    return styles.navItem;
};

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <h3>Charlie Taylor</h3>
                <h4 className={styles.jobDescription}>Full Stack Developer</h4>
            </div>

            <div>
                <Link className={getNavItemClass('about', pathname)} href="/about">
                    About
                </Link>
                <Link className={getNavItemClass('projects', pathname)} href="/projects">
                    Projects
                </Link>
                <Link className={getNavItemClass('contact', pathname)} href="/contact">
                    Contact
                </Link>
            </div>

            <div className={styles.icons}>
                <a href="https://twitter.com/charlietcoder" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://github.com/chazmcgrill" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://uk.linkedin.com/in/charliejbtaylor" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
