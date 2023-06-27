import React, {FC, ReactNode, useState, MouseEvent} from 'react';
import styles from './Accordion.module.scss';
import ArrowUp from '@/shared/icons/arrow-up.svg';
import ArrowDown from '@/shared/icons/arrow-down.svg';
import {Section} from "@/shared/ui/Section";

interface AccordionProps {
    title: string;
    content: ReactNode;
    isOpen?: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Accordion: FC<AccordionProps> = ({title, content, isOpen, onClick}) => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(prev => !prev);

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (onClick) {
            onClick?.(e);
        } else {
            toggle();
        }
    }

    return (
        <Section className={styles.accordion} onClick={handleClick}>
            <div className={styles.accordion__head}>
                <h3>{title}</h3>
                {open || isOpen ? <ArrowUp/> : <ArrowDown/>}
            </div>
            {(open || isOpen) && (
                <div className={styles.accordion__content}>
                    {content}
                </div>
            )}
        </Section>
    );
};

export default Accordion;