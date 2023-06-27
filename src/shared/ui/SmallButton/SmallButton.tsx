import React, {FC, HTMLProps} from 'react';
import styles from './SmallButton.module.scss';

type SmallButtonProps = HTMLProps<HTMLButtonElement>;

const SmallButton: FC<SmallButtonProps> = ({children, ...props}) => {
    return (
        <button className={styles.smallButton} {...props}>
            <span>{children}</span>
        </button>
    );
};

export default SmallButton;