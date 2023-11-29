import { createContext } from 'react';

export type TodoActions = {
    addTodo: (todo:Todo) => void;
    deleteTodo: (id:number) => void;
} | undefined;

export const TodoActionsContext = createContext<TodoActions>(undefined);
