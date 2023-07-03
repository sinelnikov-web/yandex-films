import React, {FC, Fragment, useState} from 'react';
import {SmallButton} from "@/shared/ui/SmallButton";
import {useDispatch, useSelector} from "react-redux";
import {basketActions, basketSelector} from "@/entities/Basket";
import styles from './FilmCounter.module.scss';
import {BasketModal} from "@/widgets/BasketModal";
import CloseIcon from '@/shared/icons/close.svg';

interface FilmCounterProps {
    filmId: string;
    showDelete?: boolean;
}

const FilmCounter: FC<FilmCounterProps> = ({filmId, showDelete}) => {
    const basket = useSelector(basketSelector);
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);


    const handleAddItem = () => dispatch(basketActions.addTicket(filmId));
    const handleRemoveItem = () => {
        if (basket[filmId] === 1) {
            setShowAlert(true);
        } else {
            dispatch(basketActions.removeTicket(filmId));
        }
    };

    return (
        <Fragment>
            <div className={styles.filmsCounter}>
                <SmallButton disabled={!basket[filmId]} onClick={handleRemoveItem}>-</SmallButton>
                {basket[filmId] ?? 0}
                <SmallButton onClick={handleAddItem}>+</SmallButton>
                {showDelete && <CloseIcon onClick={() => setShowAlert(true)}/>}
            </div>
            {showAlert && <BasketModal
                onCancel={() => setShowAlert(false)}
                onAccept={() => {
                    dispatch(basketActions.removeAllTickets(filmId));
                    setShowAlert(false);
                }}
            />}
        </Fragment>
    );
};

export default FilmCounter;