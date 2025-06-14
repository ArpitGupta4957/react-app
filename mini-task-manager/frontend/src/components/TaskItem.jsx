import React from 'react';

const TaskItem = ({ task, onToggleCompletion, onDelete }) => {
    return (
        <div className="task-item">
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <button onClick={() => onToggleCompletion(task.id)}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;