import {useEffect} from "react";

export function useDynamicViewHeight() {
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        function setHeight() {
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setHeight();
        window.addEventListener('resize', setHeight);

        return () => {
            window.removeEventListener('resize', setHeight);
        };
    });
}