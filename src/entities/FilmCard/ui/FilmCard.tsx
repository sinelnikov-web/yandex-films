import React, {FC, ReactNode} from 'react';
import styles from './FilmCard.module.scss';
import Image from "next/image";
import Link from "next/link";

const imageLoader = ({src, width, quality}) => {
    return 'http://placehold.it/1920x1080'
}

type FilmCardProps = {
    img: string;
    title: string;
    genre: string;
    filmId: string;
    counter: ReactNode;
}

const FilmCard: FC<FilmCardProps> = ({filmId, img, title, genre, counter}) => {
    return (
        <div className={styles.filmCard}>
            <Image
                loader={imageLoader}
                width={100}
                height={120}
                src={img}
                alt={'Film Image'}
            />
            <div className={styles.filmCard__info}>
                <h3 className={styles.filmCard__title}>
                    <Link href={`/films/${filmId}`}>
                        {title}
                    </Link>
                </h3>
                <p className={styles.filmCard__genre}>
                    {genre}
                </p>
            </div>
            <div className={styles.filmCard__counter}>
                {counter}
            </div>
        </div>
    );
};

export default FilmCard;