import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Nav.module.sass';

const getNavItemClass = (pathname: string, currentPathName: string) => {
    if (pathname === currentPathName) return styles.selectedNavItem;
    return styles.navItem;
};

const Nav = () => {
    const { pathname } = useRouter();
    return (
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
    );
};

export default Nav;
