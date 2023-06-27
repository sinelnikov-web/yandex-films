import React, {FC} from 'react';
import styles from './FilmReviewsList.module.scss';
import {Review, useFetchReviewsByFilmIdQuery} from "@/entities/Review";

interface FilmReviewsListProps {
    filmId: string;
}

const FilmReviewsList: FC<FilmReviewsListProps> = ({filmId}) => {
    const {data, isLoading} = useFetchReviewsByFilmIdQuery(filmId);

    if (isLoading) {
        return null;
    }

    return (
        <div className={styles.filmReviewsList}>
            {data.map(({id, text, name, rating}) => {
                return (
                    <Review key={id} name={name} text={text} rating={rating}/>
                )
            })}
        </div>
    );
};

export default FilmReviewsList;