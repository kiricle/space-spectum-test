import { useState } from 'react';
import Badge from '../../ui/Badge/Badge';
import Button from '../../ui/Button/Button';
import styles from './TodoList.module.scss';

const TodoList = () => {
    const [data, setData] = useState( [
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
        setData(prev => prev.filter((item) => item.id !== id));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Todo List</h2>
            <ul className={styles.list}>
                {data.map(({ id, title, completed }) => (
                    <li
                        key={id}
                        className={styles.item}
                    >
                        <h3 className={styles.title}>{title}</h3>
                        <Badge>{completed ? 'completed' : 'pending'}</Badge>
                        <Button appearance="secondary">Edit</Button>
                        <Button onClick={() => deleteItem(id)} appearance="danger">X</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
