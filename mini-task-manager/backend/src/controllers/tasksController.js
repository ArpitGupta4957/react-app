class TasksController {
    constructor(TaskModel) {
        this.TaskModel = TaskModel;
    }

    async getAllTasks(req, res) {
        try {
            const tasks = await this.TaskModel.find();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching tasks', error });
        }
    }

    async addTask(req, res) {
        const { title } = req.body;
        const newTask = new this.TaskModel({ title, completed: false });

        try {
            const savedTask = await newTask.save();
            res.status(201).json(savedTask);
        } catch (error) {
            res.status(400).json({ message: 'Error adding task', error });
        }
    }

    async toggleTaskCompletion(req, res) {
        const { id } = req.params;

        try {
            const task = await this.TaskModel.findById(id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }

            task.completed = !task.completed;
            const updatedTask = await task.save();
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: 'Error toggling task completion', error });
        }
    }

    async deleteTask(req, res) {
        const { id } = req.params;

        try {
            const deletedTask = await this.TaskModel.findByIdAndDelete(id);
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }

            res.status(200).json({ message: 'Task deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task', error });
        }
    }
}

export default TasksController;