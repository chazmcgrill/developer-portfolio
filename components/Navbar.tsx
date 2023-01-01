import Link from 'next/link';
import styles from '../styles/Navbar.module.sass';
import config from '../utils/config';
import Nav from './Nav';
import SocialIcons from './SocialIcons';

const Navbar = () => (
    <div className={styles.navbar}>
        <div className={styles.title}>
            <Link href="/">
                <h4>Charlie Taylor</h4>
            </Link>
            <h5 className={styles.jobDescription}>Full Stack Developer</h5>
        </div>

        {config.features.pages && <Nav />}
        <SocialIcons />
    </div>
);

export default Navbar;
