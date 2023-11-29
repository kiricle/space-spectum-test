import { useContext } from 'react';
import { TodoActionsContext } from '../../context/todo/todo-actions-context';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import styles from './CreateItemForm.module.scss';
import useInput from '../../hooks/useInput';

const CreateItemForm = () => {
    const [title, onChange] = useInput('');
    const actions = useContext(TodoActionsContext);

    if (actions === undefined) {
        throw new Error('Context is not provided');
    }

    return (
        <form className={styles.form}>
            <Input
                onChange={onChange}
                placeholder="Enter a new task"
                value={title}
            />
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    actions.addTodo({
                        id: new Date().getTime(),
                        title,
                        completed: false,
                    });
                }}
                appearance="primary"
            >
                Add
            </Button>
        </form>
    );
};

export default CreateItemForm;
