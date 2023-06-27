import React, {FC, HTMLProps} from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
    variant?: 'contained' | 'outlined'
};

const Button: FC<ButtonProps> = ({children, className, variant = 'contained', ...props}) => {
    return (
        <button
            className={classNames(
                styles.button,
                styles[`button_${variant}`],
                {
                    className,
                }
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;