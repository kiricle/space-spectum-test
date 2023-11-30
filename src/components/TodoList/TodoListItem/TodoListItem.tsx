import { useContext } from 'react';
import { useModal } from '../../../hooks/useModal';
import Badge from '../../../ui/Badge/Badge';
import Button from '../../../ui/Button/Button';
import ConfirmForm from '../../ConfirmForm/ConfirmForm';
import ModalWindow from '../../ModalWindow/ModalWindow';
import styles from './TodoListItem.module.scss';
import { TodoActionsContext } from '../../../context/todo/todo-actions-context';
import EditItemForm from '../../EditItemForm/EditItemForm';

const TodoListItem = ({
    id,
    title,
    completed,
}: {
    id: number;
    title: string;
    completed: boolean;
}) => {
    const [isOpenConfirmForm, openConfirmForm, closeConfirmForm] = useModal();
    const [isOpenEditForm, openEditForm, closeEditForm] = useModal();

    const actions = useContext(TodoActionsContext);

    if (actions === undefined) {
        throw new Error('Context is not provided');
    }

    return (
        <li
            key={id}
            className={styles.item}
        >
            <h3 className={styles.title}>{title}</h3>
            <Badge>{completed ? 'completed' : 'pending'}</Badge>
            <Button
                onClick={openEditForm}
                appearance="secondary"
            >
                Edit
            </Button>
            <Button
                onClick={openConfirmForm}
                appearance="danger"
            >
                X
            </Button>

            {isOpenConfirmForm && (
                <ModalWindow
                    isOpen={isOpenConfirmForm}
                    onClose={closeConfirmForm}
                >
                    <ConfirmForm
                        message="Are you sure you want to delete this task?"
                        onCancel={closeConfirmForm}
                        onConfirm={() => actions.deleteTodo(id)}
                    />
                </ModalWindow>
            )}

            {isOpenEditForm && (
                <ModalWindow
                    isOpen={isOpenEditForm}
                    onClose={closeEditForm}
                >
                    <EditItemForm
                        id={id}
                        title={title}
                        completed={completed}
                        onSubmit={closeEditForm}
                    />
                </ModalWindow>
            )}
        </li>
    );
};

export default TodoListItem;
