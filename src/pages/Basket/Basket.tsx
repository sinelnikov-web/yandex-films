import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import {basketSelector} from "@/features/Basket";
import {FilmCard, useFetchAllFilmsQuery} from "@/entities/FilmCard";
import FilmCounter from "@/features/FilmCounter/ui/FilmCounter";
import styles from './Basket.module.scss';
import {Section} from "@/shared/ui/Section";
import {BasketModal} from "@/widgets/BasketModal";

const Basket = () => {
    const {data, isLoading} = useFetchAllFilmsQuery();
    const basket = useSelector(basketSelector);

    const filteredFilms = useMemo(() => {
        if (!data) {
            return [];
        }
        return data.filter(({id}) => id in basket);
    }, [data, basket])

    return (
        <div className={styles.basket}>
            <div className={styles.basket__list}>
                {filteredFilms.map(({id, title, genre, posterUrl}) => {
                    return (
                        <FilmCard
                            key={id}
                            filmId={id}
                            img={posterUrl}
                            title={title}
                            genre={genre}
                            counter={<FilmCounter filmId={id} showDelete/>}
                        />
                    )
                })}
            </div>
            <Section className={styles.basket__summary}>
                <h4>Итого билетов:</h4>
                <span>{filteredFilms.length}</span>
            </Section>
        </div>
    );
};

export default Basket;