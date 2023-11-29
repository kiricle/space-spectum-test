import { useContext } from 'react';
import styles from './TodoList.module.scss';
import TodoListItem from './TodoListItem/TodoListItem';
import { TodoContext } from '../../context/todo/todo-context';

const TodoList = () => {
    const todos = useContext(TodoContext);


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Todo List</h2>
            <ul className={styles.list}>
                {todos.map(({ id, title, completed }) => (
                    <TodoListItem
                        key={id}
                        id={id}
                        title={title}
                        completed={completed}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
