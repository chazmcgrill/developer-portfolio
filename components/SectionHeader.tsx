import React from 'react';
import styles from '../styles/SectionHeader.module.sass';

interface SectionHeaderProps {
    title: string;
    buttonText: string;
    onClickButton: () => void;
}

const SectionHeader = ({ title, buttonText, onClickButton }: SectionHeaderProps) => {
    return (
        <div className={styles.sectionHeader}>
            <h2>{title}</h2>
            <button onClick={onClickButton}>{buttonText}</button>
        </div>
    );
};

export default SectionHeader;
