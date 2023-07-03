'use client'
import React from 'react';
import {useFetchFilmByIdQuery} from "@/entities/Film";
import styles from './FilmDetail.module.scss';
import {Section} from "@/shared/ui/Section";
import {FilmDetailCard} from "@/widgets/FilmDetailCard";
import {FilmReviewsList} from "@/widgets/FilmReviewsList";

const FilmDetail = ({params: {id}}) => {

    return (
        <div className={styles.filmDetail}>
            <FilmDetailCard filmId={id}/>
            <FilmReviewsList filmId={id}/>
        </div>
    );
};

export default FilmDetail;