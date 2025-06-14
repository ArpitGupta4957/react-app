const express = require('express');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/tasks', tasksRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/mini-task-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Database connection error:', err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

localStorage = window.localStorage

// check the app for the testing purpose 

module.exports = app; // Export the app for testing