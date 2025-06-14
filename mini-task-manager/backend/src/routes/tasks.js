const express = require('express');
const router = express.Router();
const TasksController = require('../controllers/tasksController');
const tasksController = new TasksController();

// GET /tasks
router.get('/', tasksController.getAllTasks);

// POST /tasks
router.post('/', tasksController.addTask);

// PATCH /tasks/:id
router.patch('/:id', tasksController.toggleTaskCompletion);

// DELETE /tasks/:id
router.delete('/:id', tasksController.deleteTask);

module.exports = router;