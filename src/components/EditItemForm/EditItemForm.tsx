import { TodoActionsContext } from '../../context/todo/todo-actions-context';
import useInput from '../../hooks/useInput';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import styles from './EditItemForm.module.scss';
import { useContext, useState } from 'react';

const EditItemForm = ({
    id,
    title,
    completed,
    onSubmit,
}: {
    id: number;
    title: string;
    completed: boolean;
    onSubmit: () => void;
}) => {
    const [titleInput, onChange] = useInput(title);
    const [checked, setChecked] = useState(completed);
    const actions = useContext(TodoActionsContext);

    if (actions === undefined) {
        throw new Error('Context is not provided!');
    }

    return (
        <form className={styles.form}>
            <h2>Edit Task</h2>
            <Input
                onChange={onChange}
                placeholder="Enter title"
                value={titleInput}
            />
            <label htmlFor="completed">
                Completed:{' '}
                <input
                    onClick={() => setChecked((prev) => !prev)}
                    type="checkbox"
                    name="completed"
                    checked={checked}
                />
            </label>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    if (titleInput === '') return;
                    actions.editTodo({
                        id,
                        title: titleInput,
                        completed: checked,
                    });
                    onSubmit();
                }}
                appearance="secondary"
            >
                Edit
            </Button>
        </form>
    );
};

export default EditItemForm;
