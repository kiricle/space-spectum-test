import { useEffect } from 'react';

export const useCloseOnEsc = (isOpen: boolean, onClose: () => void) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) [document.addEventListener('keydown', handleEsc)];

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);
};
