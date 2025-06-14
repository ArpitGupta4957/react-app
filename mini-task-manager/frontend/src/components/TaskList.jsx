import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleCompletion, onDeleteTask }) => {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <TaskItem 
                        key={task._id} 
                        task={task} 
                        onToggleCompletion={onToggleCompletion} 
                        onDeleteTask={onDeleteTask} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;