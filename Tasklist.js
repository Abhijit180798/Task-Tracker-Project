import Task from './Task';

const TaskList = ({ tasks, toggleComplete, removeTask }) => (
    <div className="task-list">
        {tasks.map((task) => (
            <Task
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                removeTask={removeTask}
            />
        ))}
    </div>
);

export default TaskList;
