# Mini Task Manager Backend

## Overview
This is the backend for the Mini Task Manager application. It is built using Node.js and Express, providing a RESTful API to manage tasks.

## Features
- Add a new task
- Mark a task as complete or incomplete
- Delete a task
- Fetch all tasks

## Technologies Used
- Node.js
- Express
- MongoDB (or in-memory storage)

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- MongoDB installed or a MongoDB Atlas account for cloud storage

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd mini-task-manager/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
1. Start the server:
   ```
   npm start
   ```
2. The server will run on `http://localhost:5000` by default.

## API Endpoints

### GET /tasks
Fetch all tasks.

### POST /tasks
Add a new task. Requires a JSON body with the task title:
```json
{
  "title": "Task Title"
}
```

### PATCH /tasks/:id
Toggle the completion status of a task.

### DELETE /tasks/:id
Delete a task by ID.

## Bonus Features
- Ability to edit a task's title (if implemented).

## License
This project is licensed under the MIT License.