import React, {FC, forwardRef, RefObject, useCallback, useRef, useState} from 'react';
import styles from './Select.module.scss';
import classNames from "classnames";
import {Input, InputProps} from "@/shared/ui/Input";
import {Portal} from "@/shared/ui/Portal";
import {it} from "node:test";

type SelectItem = {
    id: string;
    label: string;
}

type SelectProps = Omit<InputProps, 'value' | 'onSelect'> & {
    items: Array<SelectItem>;
    onSelect: (item: SelectItem) => void;
    value: null | string;
};

const Select: FC<SelectProps> = ({className, items, onSelect, value, ...props}) => {
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOpenDropdown = () => setDropdownOpen(true);
    const handleCloseDropdown = () => setDropdownOpen(false);

    const handleSelect = useCallback((item: SelectItem) => {
        setDropdownOpen(false);
        onSelect(item);
    }, [onSelect])

    return (
        <div
            onFocus={handleOpenDropdown}
            className={classNames(styles.select, {className})}
        >
            <Input
                ref={inputRef}
                value={value ? items.find(item => item.id === value)?.label : ''}
                {...props}
            />
            <div className={classNames(styles.select__arrow, {[styles.select__arrow_open]: dropdownOpen})}>

            </div>
            {dropdownOpen && <Dropdown anchorElement={inputRef} items={items} onSelect={handleSelect}/>}
        </div>
    );
};

type DropdownProps = {
    anchorElement: RefObject<HTMLElement | null>;
    items: Array<SelectItem>;
    onSelect: (item: SelectItem) => void;
}

const DROPDOWN_ITEM_HEIGHT = 42.5;
const MAX_DROPDOWN_HEIGHT = DROPDOWN_ITEM_HEIGHT * 5;

const Dropdown: FC<DropdownProps> = ({anchorElement, items, onSelect}) => {

    const handleMountDropdown = (element: HTMLDivElement) => {
        if (anchorElement.current) {
            const {x, y, width, height} = anchorElement.current?.getBoundingClientRect();
            element.style.top = `${y + height + 4}px`;
            element.style.left = `${x}px`;
            element.style.width = `${width}px`;
        }
    }

    return (
        <Portal>
            <div
                ref={(newRef) => {
                    newRef && handleMountDropdown(newRef);
                }}
                className={styles.select__dropdown}
                style={{
                    maxHeight: `${MAX_DROPDOWN_HEIGHT}px`,
                    overflowY: 'auto'
                }}
            >
                {items.map(({id, label}) => {
                    return (
                        <div
                            key={id}
                            className={styles.select__dropdownItem}
                            onClick={() => onSelect({id, label})}
                        >
                            <p>{label}</p>
                        </div>
                    )
                })}
            </div>
        </Portal>
    )
};

export default Select;