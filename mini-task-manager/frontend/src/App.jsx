import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get('/tasks');
        setTasks(response.data);
    };

    const addTask = async (title) => {
        const response = await axios.post('/tasks', { title });
        setTasks([...tasks, response.data]);
    };

    const toggleTaskCompletion = async (id) => {
        const response = await axios.patch(`/tasks/${id}`);
        setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    };

    const deleteTask = async (id) => {
        await axios.delete(`/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
    };

    return (
        <div>
            <h1>Mini Task Manager</h1>
            <AddTask addTask={addTask} />
            <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
        </div>
    );
};

export default App;