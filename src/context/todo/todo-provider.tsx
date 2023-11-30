import { useState, PropsWithChildren } from 'react';
import { TodoContext } from './todo-context';
import { TodoActions, TodoActionsContext } from './todo-actions-context';

export const TodoProvider = ({ children }: PropsWithChildren) => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            title: 'Task 1',
            completed: false,
        },
        {
            id: 2,
            title: 'Task 2',
            completed: true,
        },
        {
            id: 3,
            title: 'Task 3',
            completed: true,
        },
        {
            id: 4,
            title: 'Task 4',
            completed: false,
        },
        {
            id: 5,
            title: 'Task 5',
            completed: true,
        },
        {
            id: 6,
            title: 'Task 6',
            completed: true,
        },
    ]);

    const todosActions = {
        addTodo: (newTodo: Todo) => {
            setTodos((prev) => [...prev, newTodo]);
        },
        deleteTodo: (id: number) => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        },
        editTodo: (newTodo: Todo) => {
            setTodos((prev) =>
                prev.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
            );
        },
    } as TodoActions;

    return (
        <TodoContext.Provider value={todos}>
            <TodoActionsContext.Provider value={todosActions}>
                {children}
            </TodoActionsContext.Provider>
        </TodoContext.Provider>
    );
};
