import Link from 'next/link';
import styles from '../styles/Navbar.module.sass';
import Nav from './Nav';
import SocialIcons from './SocialIcons';

const Navbar = () => (
    <div className={styles.navbar}>
        <div className={styles.title}>
            <Link href="/">
                <h3>Charlie Taylor</h3>
            </Link>
            <h4 className={styles.jobDescription}>Full Stack Developer</h4>
        </div>

        <Nav />
        <SocialIcons />
    </div>
);

export default Navbar;
