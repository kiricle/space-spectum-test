import './App.css';
import CreateItemForm from './components/CreateItemForm/CreateItemForm';
import TodoList from './components/TodoList/TodoList';
import { TodoProvider } from './context/todo/todo-provider';

function App() {
    return (
        <>
            <TodoProvider>
                <CreateItemForm />
                <TodoList />
            </TodoProvider>
        </>
    );
}

export default App;
