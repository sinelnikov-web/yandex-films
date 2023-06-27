'use client'
import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {createPortal} from "react-dom";

type PortalProps = {
    children: ReactNode;
}

const Portal: FC<PortalProps> = ({children}) => {
    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#portal")
        setMounted(true)
    }, []);

    return ref.current && createPortal(
        children,
        ref.current as Element
    );
};

export default Portal;