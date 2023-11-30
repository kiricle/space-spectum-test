import { createContext } from 'react';

export type TodoActions =
    | {
          addTodo: (todo: Todo) => void;
          deleteTodo: (id: number) => void;
          editTodo: (todo: Todo) => void;
      }
    | undefined;

export const TodoActionsContext = createContext<TodoActions>(undefined);
