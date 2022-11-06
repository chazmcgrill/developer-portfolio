import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/SocialIcons.module.sass';

const SocialIcons = () => (
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
);

export default SocialIcons;
