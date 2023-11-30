import { useState, PropsWithChildren } from 'react';
import { TodoContext } from './todo-context';
import { TodoActions, TodoActionsContext } from './todo-actions-context';

export const TodoProvider = ({ children }: PropsWithChildren) => {
    const [todos, setTodos] = useState<Todo[]>([]);

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
