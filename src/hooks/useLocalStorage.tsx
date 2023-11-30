import { useCallback, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const readValue = useCallback((): T => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue = (newValue: T) => {
        if (typeof window === 'undefined') {
            console.warn(
                `Tried setting localStorage key “${key}” even though environment is not a client`
            );
        }

        try {
            localStorage.setItem(key, JSON.stringify(newValue))
            setStoredValue(newValue);
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error)
        }
    };

    return [storedValue, setValue] as const;
}
