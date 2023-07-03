import React, {FC} from 'react';
import styles from './FilmDetailCard.module.scss';
import {Section} from "@/shared/ui/Section";
import Image from "next/image";
import {useFetchFilmByIdQuery} from "@/entities/Film";
import FilmCounter from "@/features/FilmCounter/ui/FilmCounter";

interface FilmDetailCardProps {
    filmId: string;
}

const FilmDetailCard: FC<FilmDetailCardProps> = ({filmId}) => {
    const {
        data,
        isLoading
    } = useFetchFilmByIdQuery(filmId);

    if (isLoading || !data) {
        return null;
    }

    const {
        title, description, posterUrl,
        genre, releaseYear, rating,
        director
    } = data;

    return (
        <Section className={styles.filmDetailCard}>
            <div className={styles.filmDetailCard__poster}>
                <Image
                    loader={() => posterUrl}
                    src={posterUrl}
                    alt={"Постер фильма"}
                    width={400}
                    height={500}
                />
            </div>
            <div className={styles.filmDetailCard__info}>
                <h1>{title}</h1>
                <ul>
                    <li>
                        <h3>Жанр: </h3>
                        <p>{genre}</p>
                    </li>
                    <li>
                        <h3>Год выпуска: </h3>
                        <p>{releaseYear}</p>
                    </li>
                    <li>
                        <h3>Рейтинг: </h3>
                        <p>{rating}</p>
                    </li>
                    <li>
                        <h3>Режиссер: </h3>
                        <p>{director}</p>
                    </li>
                </ul>
                <div className={styles.filmDetailCard__description}>
                    <h3>Описание</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.filmDetailCard__counter}>
                <FilmCounter filmId={filmId}/>
            </div>
        </Section>
    );
};

export default FilmDetailCard;