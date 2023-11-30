import { useContext } from 'react';
import './App.css';
import CreateItemForm from './components/CreateItemForm/CreateItemForm';
import Paginator from './components/Paginator/Paginator';
import TodoList from './components/TodoList/TodoList';
import { TodoContext } from './context/todo/todo-context';

function App() {
    const todos = useContext(TodoContext);

    if (todos === undefined) {
        throw new Error('Context is not provided!');
    }

    return (
        <>
            <CreateItemForm />
            <Paginator
                data={todos}
                itemsPerPage={4}
                render={(todos: Todo[]) => <TodoList todos={todos} />}
            />
        </>
    );
}

export default App;
