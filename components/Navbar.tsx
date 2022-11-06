import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Navbar.module.sass';
import SocialIcons from './SocialIcons';

const getNavItemClass = (pathname: string, currentPathName: string) => {
    if (pathname === currentPathName) return styles.selectedNavItem;
    return styles.navItem;
};

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Link href="/">
                    <h3>Charlie Taylor</h3>
                </Link>
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

            <SocialIcons />
        </div>
    );
};

export default Navbar;
