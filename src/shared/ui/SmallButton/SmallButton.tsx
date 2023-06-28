import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC, HTMLProps} from 'react';
import styles from './SmallButton.module.scss';

type SmallButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const SmallButton: FC<SmallButtonProps> = ({children, ...props}) => {
    return (
        <button className={styles.smallButton} {...props}>
            <span>{children}</span>
        </button>
    );
};

export default SmallButton;