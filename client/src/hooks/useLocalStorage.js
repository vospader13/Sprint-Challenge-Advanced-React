import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [stored, setStored] = useState (() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStored(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [stored, setValue];
}