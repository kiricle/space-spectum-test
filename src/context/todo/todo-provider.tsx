import { useState, PropsWithChildren } from 'react';
import { TodoContext } from './todo-context';
import { TodoActions, TodoActionsContext } from './todo-actions-context';

export const TodoProvider = ({ children }: PropsWithChildren) => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        },
        {
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: true,
        },
        {
            id: 3,
            title: 'quiasdasds ut nam facilis et officia qui',
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
    } as TodoActions;

    return (
        <TodoContext.Provider value={todos}>
            <TodoActionsContext.Provider value={todosActions}>
                {children}
            </TodoActionsContext.Provider>
        </TodoContext.Provider>
    );
};
