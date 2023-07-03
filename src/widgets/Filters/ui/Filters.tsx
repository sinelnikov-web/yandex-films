import React, {useEffect, useMemo, useState} from 'react';
import styles from './Filters.module.scss';
import {Input} from "@/shared/ui/Input";
import {FormField} from "@/shared/ui/FormField";
import {Select} from "@/shared/ui/Select";
import {useFetchAllCinemasQuery, useFetchAllFilmsQuery} from "@/entities/Film";
import {getUniqueGenres} from "../lib/getUniqueGenres";
import {useDispatch, useSelector} from "react-redux";
import {filtersActions, filtersSelector} from "../model";
import {useDebounce} from "@/shared/hooks/useDebounce";

const Filters = () => {
    const {cinemaId, genreId} = useSelector(filtersSelector);
    const {data: filmsData, isLoading: isFilmsLoading} = useFetchAllFilmsQuery(cinemaId ?? undefined);
    const {data: cinemasData, isLoading: isCinemasLoading} = useFetchAllCinemasQuery()
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search);
    const dispatch = useDispatch();

    const genres = useMemo(() => {
        if (!filmsData) {
            return [];
        }
        return getUniqueGenres(filmsData);
    }, [filmsData]);

    const cinemas = useMemo(() => {
        if (!cinemasData) {
            return [];
        }
        return cinemasData.map(({id, name}) => ({id, label: name}));
    }, [cinemasData]);


    useEffect(() => {
        dispatch(filtersActions.changeFilter({name: 'title', value: debouncedSearch}));
    }, [debouncedSearch]);

    if (isCinemasLoading || isFilmsLoading) {
        return null;
    }

    const handleChangeFiler = (name, value) => {
        dispatch(filtersActions.changeFilter({name, value}));
    }

    return (
        <div className={styles.filters}>
            <p className={styles.filters__title}>Фильтр поиска</p>
            <div className={styles.filters__form}>
                <FormField
                    label={"Название"}
                    element={
                        <Input
                            onChange={(e: any) => setSearch(e.target.value)}
                            placeholder={'Введите название'}
                        />}
                />
                <FormField
                    label={"Жанр"}
                    element={
                        <Select
                            placeholder={'Выберите жанр'}
                            fullWidth
                            name={'genre'}
                            items={genres}
                            onSelect={(item) => {
                                handleChangeFiler('genreId', item.id);
                            }}
                            value={genreId}
                        />
                    }
                />
                <FormField
                    label={"Кинотеатр"}
                    element={
                        <Select
                            placeholder={'Выберите кинотеатр'}
                            fullWidth
                            name={'cinema'}
                            items={cinemas}
                            onSelect={(item) => {
                                handleChangeFiler('cinemaId', item.id);
                            }}
                            value={cinemaId}
                        />
                    }
                />
            </div>
        </div>
    );
};

export default Filters;