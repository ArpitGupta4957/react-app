# Mini Task Manager

This project is a mini task manager web application that allows users to manage their tasks efficiently. It consists of a backend built with Node.js and Express, and a frontend developed using React.

## Features

- Add a new task
- Mark a task as complete or incomplete
- Delete a task
- Real-time updates via API calls

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: React
- **Database**: MongoDB (or in-memory for temporary storage)

## Project Structure

```
mini-task-manager
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── tasksController.js
│   │   ├── models
│   │   │   └── task.js
│   │   ├── routes
│   │   │   └── tasks.js
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── AddTask.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints

- **GET /tasks**: Fetch all tasks
- **POST /tasks**: Add a new task
- **PATCH /tasks/:id**: Toggle task completion
- **DELETE /tasks/:id**: Delete a task

## Bonus Features (if time permits)

- Ability to edit a task's title

This project aims to provide a simple yet effective way to manage tasks, making it easier for users to stay organized.