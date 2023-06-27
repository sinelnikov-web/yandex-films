import React, {FC, ReactNode} from 'react';
import {Portal} from "@/shared/ui/Portal";
import styles from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({children, onClose}) => {

    return (
        <Portal>
            <div onClick={onClose} className={styles.modal__overlay}>
                <div className={styles.modal__content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;