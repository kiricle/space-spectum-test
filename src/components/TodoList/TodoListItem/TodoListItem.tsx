import { useModal } from '../../../hooks/useModal';
import Badge from '../../../ui/Badge/Badge';
import Button from '../../../ui/Button/Button';
import ConfirmForm from '../../ConfirmForm/ConfirmForm';
import ModalWindow from '../../ModalWindow/ModalWindow';
import styles from './TodoListItem.module.scss';

const TodoListItem = ({
    id,
    title,
    completed,
    deleteItem,
}: {
    id: number;
    title: string;
    completed: boolean;
    deleteItem: (id: number) => void;
}) => {
    const [isOpen, openModal, closeModal] = useModal();

    return (
        <li
            key={id}
            className={styles.item}
        >
            <h3 className={styles.title}>{title}</h3>
            <Badge>{completed ? 'completed' : 'pending'}</Badge>
            <Button appearance="secondary">Edit</Button>
            <Button
                onClick={() => openModal()}
                appearance="danger"
            >
                X
            </Button>
            {isOpen && (
                <ModalWindow
                    isOpen={isOpen}
                    onClose={closeModal}
                >
                    <ConfirmForm
                        message="Are you sure you want to delete this task?"
                        onCancel={closeModal}
                        onConfirm={() => deleteItem(id)}
                    />
                </ModalWindow>
            )}
        </li>
    );
};

export default TodoListItem;
