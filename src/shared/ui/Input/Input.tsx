import React, {FC, forwardRef, HTMLProps} from 'react';
import styles from './Input.module.scss';
import classNames from "classnames";

export type InputProps = HTMLProps<HTMLInputElement> & {
    fullWidth?: boolean;
};

const Input: FC<InputProps> = forwardRef(({className, style, fullWidth, ...props}, ref) => {
    return (
        <input
            className={classNames(styles.input, {className})}
            type="text"
            ref={ref}
            style={{
                ...style,
                width: fullWidth ? '100%' : 'auto'
            }}
            {...props}
        />
    );
});

export default Input;
