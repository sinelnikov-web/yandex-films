import React, {FC} from 'react';
import {Section} from "@/shared/ui/Section";
import {Modal} from "@/shared/ui/Modal";
import styles from './BasketModal.module.scss';
import {Button} from "@/shared/ui/Button";
import CloseIcon from '@/shared/icons/close.svg';

interface BasketModalProps {
    onCancel: () => void;
    onAccept: () => void;
}

const BasketModal: FC<BasketModalProps> = ({onCancel, onAccept}) => {
    return (
        <Modal onClose={onCancel}>
            <Section className={styles.basketModal}>
                <div className={styles.basketModal__head}>
                    <h3>Удаление билета</h3>
                    <CloseIcon/>
                </div>
                <div className={styles.basketModal__content}>
                    <p>
                        Вы уверены, что хотите удалить билет?
                    </p>
                </div>
                <div className={styles.basketModal__footer}>
                    <Button onClick={onAccept}>Да</Button>
                    <Button onClick={onCancel} variant={'outlined'}>Нет</Button>
                </div>
            </Section>
        </Modal>
    );
};

export default BasketModal;