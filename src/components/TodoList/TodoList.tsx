import { useState } from 'react';
import styles from './TodoList.module.scss';
import TodoListItem from './TodoListItem/TodoListItem';

const TodoList = () => {
    const [data, setData] = useState([
        {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        },
        {
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: true,
        },
    ]);

    const deleteItem = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Todo List</h2>
            <ul className={styles.list}>
                {data.map(({ id, title, completed }) => (
                    <TodoListItem
                        key={id}
                        id={id}
                        title={title}
                        completed={completed}
                        deleteItem={deleteItem}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
