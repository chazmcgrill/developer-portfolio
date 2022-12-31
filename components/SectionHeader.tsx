import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/SectionHeader.module.sass';

interface SectionHeaderProps {
    title: string;
    buttonText?: string;
    buttonHref?: string;
}

const SectionHeader = ({ title, buttonText, buttonHref }: SectionHeaderProps) => {
    const router = useRouter();

    const handleClick = () => {
        if (buttonHref) router.push(buttonHref);
    };

    return (
        <div className={styles.sectionHeader}>
            <h2>{title}</h2>
            {!!buttonText && <button onClick={handleClick}>{buttonText}</button>}
        </div>
    );
};

export default SectionHeader;
