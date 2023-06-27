import {useEffect} from "react";

export const useClickOutside = (refs, callback) => {
    const handleClick = e => {
        for (let ref of refs) {
            if (ref.current === document.activeElement) {
                break;
            }
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};