import React from 'react';
import styles from './Footer.module.scss';
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href={'/qna'}>Вопросы-ответы</Link>
            <Link href={'/about'}>О нас</Link>
        </footer>
    );
};
