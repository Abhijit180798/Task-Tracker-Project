import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="app">
            <Header />
            <TaskForm addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                removeTask={removeTask}
            />
        </div>
    );
};

export default App;
