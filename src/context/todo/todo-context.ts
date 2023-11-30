import {createContext} from 'react'

export const TodoContext = createContext<Todo[] | undefined>(undefined);