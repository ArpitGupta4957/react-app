import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
    const [taskTitle, setTaskTitle] = useState('');

    const handleInputChange = (event) => {
        setTaskTitle(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!taskTitle) return;

        try {
            const response = await axios.post('/tasks', { title: taskTitle });
            onTaskAdded(response.data);
            setTaskTitle('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskTitle}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;