import React, {FC, HTMLProps} from 'react';
import classNames from "classnames";
import style from './Section.module.scss';

type SectionProps = HTMLProps<HTMLDivElement>;

const Section: FC<SectionProps> = ({className, children, ...props}) => {
    return (
        <div className={classNames(style.section, [className])} {...props}>
            {children}
        </div>
    );
};

export default Section;