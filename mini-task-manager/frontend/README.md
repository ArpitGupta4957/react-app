# Mini Task Manager Frontend

This is the frontend part of the Mini Task Manager application built with React. It allows users to manage their tasks by adding, completing, and deleting them.

## Features

- Add new tasks
- Mark tasks as complete or incomplete
- Delete tasks
- Real-time updates via API calls to the backend

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:

   ```
   cd mini-task-manager/frontend
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To start the development server, run:

```
npm start
```

The application will be available at `http://localhost:3000`.

### API Integration

The frontend communicates with the backend through the following API endpoints:

- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Add a new task
- `PATCH /tasks/:id` - Toggle task completion
- `DELETE /tasks/:id` - Delete a task

### Folder Structure

- `src/` - Contains all the source code for the frontend application.
  - `components/` - Contains React components for task management.
    - `TaskList.jsx` - Displays the list of tasks.
    - `TaskItem.jsx` - Represents a single task.
    - `AddTask.jsx` - Input field for adding new tasks.
  - `App.jsx` - Main component managing the application state.
  - `index.js` - Entry point for the React application.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.