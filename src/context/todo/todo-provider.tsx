import { PropsWithChildren, useState } from 'react';
import { TodoActions, TodoActionsContext } from './todo-actions-context';
import { TodoContext } from './todo-context';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const TodoProvider = ({ children }: PropsWithChildren) => {
    const [storedTodos, saveTodos] = useLocalStorage('todos', [] as Todo[]);
    const [todos, setTodos] = useState<Todo[]>(storedTodos);

    const todosActions = {
        addTodo: (newTodo: Todo) => {
            setTodos((prev) => {
                const newTodos = [...prev, newTodo];
                saveTodos(newTodos);
                return newTodos;
            });
        },
        deleteTodo: (id: number) => {
            setTodos((prev) => {
                const newTodos = prev.filter((todo) => todo.id !== id);
                saveTodos(newTodos);
                return newTodos;
            });
        },
        editTodo: (newTodo: Todo) => {
            setTodos((prev) => {
                const newTodos = prev.map((todo) =>
                    todo.id === newTodo.id ? newTodo : todo
                );
                saveTodos(newTodos);
                return newTodos;
            });
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
