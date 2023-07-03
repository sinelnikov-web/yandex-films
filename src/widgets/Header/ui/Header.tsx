import React from 'react';
import styles from './Header.module.scss';
import BasketIcon from '@/shared/icons/basket.svg';
import {useSelector} from "react-redux";
import {basketSelector} from "@/entities/Basket";
import Link from "next/link";

export const Header = () => {
    const basket = useSelector(basketSelector);
    const itemsCount = Object.keys(basket).reduce((acc, key) => acc + basket[key], 0)

    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.header__logo}>Билетопоиск</Link>
            <Link href={'/basket'} className={styles.header__basket}>
                {itemsCount > 0 && <div>
                    <span>{itemsCount}</span>
                </div>}
                <BasketIcon/>
            </Link>
        </header>
    );
};
