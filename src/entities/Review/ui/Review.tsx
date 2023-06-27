import React, {FC} from 'react';
import styles from './Review.module.scss';
import DefaultPhoto from '@/shared/icons/photo.svg';
import Image from "next/image";
import {Section} from "@/shared/ui/Section";

interface ReviewProps {
    name: string;
    text: string;
    rating: number;
}

const Review: FC<ReviewProps> = ({name, text, rating}) => {
    return (
        <Section className={styles.review}>
            <div className={styles.review__photo}>
                <div className={styles.review__photo_bg}>
                    <DefaultPhoto/>
                </div>
            </div>
            <div className={styles.review__content}>
                <div className={styles.review__head}>
                    <h4>{name}</h4>
                    <p className={styles.review__rating}>
                        Оценка:
                        <span>{rating}</span>
                    </p>
                </div>
                <p className={styles.review__text}>
                    {text}
                </p>
            </div>
        </Section>
    );
};

export default Review;