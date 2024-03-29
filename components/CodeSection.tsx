import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/CodeSection.module.sass';
import SectionHeader from './SectionHeader';

interface GithubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

const useGithubRepositories = () => {
    const [repositories, setRepositories] = useState<GithubRepo[]>([]);

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

const CodeRepoItem = ({ repository }: { repository: GithubRepo }) => {
    return (
        <div>
            <h5>{repository.name}</h5>
            <p>{repository.description}</p>
            <Link href={repository.html_url}>view repo</Link>
        </div>
    );
};

const CodeSection = () => {
    const repositories = useGithubRepositories();
    return (
        <section className={styles.codeSection}>
            <SectionHeader title="Code" buttonText="view on github" buttonHref="https://github.com/chazmcgrill?tab=repositories" />
            <div className={styles.codeRepoGrid}>
                {repositories.map((repository) => (
                    <CodeRepoItem key={repository.id} repository={repository} />
                ))}
            </div>
        </section>
    );
};

export default CodeSection;
