import { spawn } from 'child_process';
import React, { useEffect, useState } from 'react';
import styles from '../styles/CodeSection.module.sass';
import SectionHeader from './SectionHeader';

const useGithubRepositories = () => {
    const [repositories, setRepositories] = useState<any>([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const result = await fetch('https://api.github.com/users/chazmcgrill/repos?sort=updated&per_page=4');
                const json = await result.json();
                setRepositories(json);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchRepositories();
    }, []);

    return repositories;
};

const CodeSection = () => {
    const repositories = useGithubRepositories();
    console.log('repositories', repositories);
    return (
        <section className={styles.codeSection}>
            <SectionHeader title="Code" buttonText="view on github" buttonHref="https://github.com/chazmcgrill?tab=repositories" />
            {repositories.map((repository: any) => (
                <span key={repository.name}>{repository.name}</span>
            ))}
        </section>
    );
};

export default CodeSection;
