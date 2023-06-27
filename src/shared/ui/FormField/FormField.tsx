import React, {FC, ReactNode} from 'react';
import styles from './FormField.module.scss';

type FormFieldProps = {
    element: ReactNode;
    label: string;
}

const FormField: FC<FormFieldProps> = ({element, label}) => {
    return (
        <label className={styles.formField__label}>
            <p>{label}</p>
            {element}
        </label>
    );
};

export default FormField;