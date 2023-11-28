import { ReactNode } from 'react';
import Button from '../../ui/Button/Button';
import styles from './ModalWindow.module.scss';
import { useCloseOnEsc } from '../../hooks/useCloseOnEsc';

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

    return (
        <div className={styles.overlay}>
            <section className={styles.modal}>
                <Button
                    className={styles.close}
                    appearance="danger"
                >
                    &#10005;
                </Button>
                {children}
            </section>
        </div>
    );
};

export default ModalWindow;
