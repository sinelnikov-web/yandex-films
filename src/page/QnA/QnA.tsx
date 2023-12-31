import React from 'react';
import {Accordion} from "@/shared/ui/Accordion";
import {Section} from "@/shared/ui/Section";
import styles from './QnA.module.scss';

const QnA = () => {
    return (
        <div className={styles.qna}>
            <Section>
                <h1>Вопросы-ответы</h1>
            </Section>
           <Accordion
               title={'Что такое Билетопоиск?'}
               content={'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'}
           />
            <Accordion
                title={'Какой компании принадлежит Билетопоиск?'}
                content={'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'}
            />
            <Accordion
                title={'Как купить билет на Билетопоиск?'}
                content={'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'}
            />
            <Accordion
                title={'Как оставить отзыв на Билетопоиск?'}
                content={'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'}
            />
        </div>
    );
};

export default QnA;