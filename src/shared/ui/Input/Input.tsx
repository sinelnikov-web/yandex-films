import React, {FC, forwardRef, HTMLProps, RefObject} from 'react';
import styles from './Input.module.scss';
import classNames from "classnames";

export type InputProps = HTMLProps<HTMLInputElement> & {
    fullWidth?: boolean;
    inputRef?: RefObject<HTMLInputElement>;
};

const Input: FC<InputProps> = ({className, style, fullWidth, inputRef, ...props}) => {
    return (
        <input
            className={classNames(styles.input, {className})}
            type="text"
            ref={inputRef}
            style={{
                ...style,
                width: fullWidth ? '100%' : 'auto'
            }}
            {...props}
        />
    );
};

export default Input;
