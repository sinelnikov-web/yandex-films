'use client'
import React from 'react';
import {Filters, filtersSelector} from "@/widgets/Filters";
import {FilmCard} from "@/entities/Film";
import styles from './FilmsList.module.scss';
import {useFetchAllFilmsQuery} from '@/entities/Film'
import FilmCounter from "@/features/FilmCounter/ui/FilmCounter";
import {useSelector} from "react-redux";

const FilmsList = () => {
    const {cinemaId, genreId, title: searchTitle} = useSelector(filtersSelector);
    const {data, isLoading} = useFetchAllFilmsQuery(cinemaId ?? undefined);

    const filterFilms = (genre: string, title: string) => {
        return (genreId === null || genre === genreId) && title.includes(searchTitle);
    }

    if (isLoading) {
        return null;
    }

    return (
        <div className={styles.filmsList}>
            <div className={styles.filmsList__sidebar}>
                <Filters/>
            </div>
            <div className={styles.filmsList__cards}>
                {data?.filter(({genre, title}) => filterFilms(genre, title)).map(({id, title, genre, posterUrl}) => {
                    return (
                        <FilmCard
                            key={id}
                            filmId={id}
                            img={posterUrl}
                            title={title}
                            genre={genre}
                            counter={<FilmCounter filmId={id}/>}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default FilmsList;