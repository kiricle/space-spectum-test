import { ReactNode } from 'react';
import Button from '../../ui/Button/Button';
import styles from './ModalWindow.module.scss';
import { useCloseOnEsc } from '../../hooks/useCloseOnEsc';
import { createPortal } from 'react-dom';

const ModalWindow = ({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}) => {
    useCloseOnEsc(isOpen, onClose);

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className={styles.overlay}>
            <section className={styles.modal}>
                <Button
                    className={styles.close}
                    onClick={onClose}
                    appearance="danger"
                >
                    &#10005;
                </Button>
                {children}
            </section>
        </div>,
        document.body
    );
};

export default ModalWindow;
