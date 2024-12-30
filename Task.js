const Task = ({ task, toggleComplete, removeTask }) => (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
        <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
        <button onClick={() => removeTask(task.id)}>X</button>
    </div>
);

export default Task;
