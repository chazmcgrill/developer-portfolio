import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/SocialIcons.module.sass';

const SocialIcons = () => (
    <div className={styles.icons}>
        <a href="https://github.com/chazmcgrill" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://bsky.app/profile/charlietaylor.dev" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faBluesky} />
        </a>
        <a href="https://uk.linkedin.com/in/charliejbtaylor" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
    </div>
);

export default SocialIcons;
