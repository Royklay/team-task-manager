# TaskFlow – Team Task Manager

A collaborative task management application built with **React, Redux Toolkit, and React Router**. TaskFlow helps users create, organize, update, and track their tasks through a simple dashboard.


## Project Overview

TaskFlow is a frontend team task management application designed to demonstrate how modern React applications manage authentication, application state, routing, and task operations.

Users can register an account, log in, access a protected dashboard, and manage their tasks.

The project uses Redux Toolkit for centralized state management and React Router for navigation and route protection.

## Features

### 1. User Authentication
- User registration with username, email, and password.
- User login using registered credentials.
- Logout functionality.
- Authentication state management using Redux Toolkit.
- Persisted login state using LocalStorage.

### 2. Protected Dashboard
- Only authenticated users can access the dashboard.
- Unauthenticated users are redirected to the login page.
- Users can log out and lose access to protected pages.

### 3. Task Management
- Create new tasks.
- View all available tasks.
- Update existing task information.
- Delete tasks.
- Track task completion status.
- Organize tasks by status, such as Pending and Completed.

### 4. State Management
- Redux Toolkit for centralized application state.
- Redux slices for authentication and task management.
- React Redux hooks for accessing and updating application state.

### 5. Performance Optimization
- React.memo to reduce unnecessary component re-renders.
- useCallback to maintain stable callback references where needed.
- useMemo to optimize derived task data, such as filtered task lists.

### 6. Responsive User Interface
- Component-based React architecture.
- Reusable interface components.
- Responsive layouts for different screen sizes.

## Technologies Used

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| JavaScript (ES6+) | Application logic |
| Redux Toolkit | Global state management |
| React Redux | Connecting React components to Redux |
| React Router DOM | Application navigation and protected routes |
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| Git & GitHub | Version control and team collaboration |
| Vite | Development server and build tool |

## Project Structure

The project follows a component-based folder structure:

```text
team-task-manager/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItems.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── authSlice.js
│   │   └── taskSlice.js
│   │
│   ├── utils/
│   │   └── auth.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git
- Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/Royklay/team-task-manager
```

### 2. Navigate to the Project Directory

```bash
cd team-task-manager
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Required Packages

If the dependencies are not already included in your package.json, install:

```bash
npm install @reduxjs/toolkit react-redux react-router-dom
```

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## Authentication

TaskFlow implements basic frontend authentication.

The authentication utility functions are located in:

```text
src/utils/auth.js
```

The application supports four main authentication operations:

| Function | Description |
|---|---|
| registerUser() | Registers a new user |
| loginUser() | Checks user credentials |
| logoutUser() | Removes the logged-in user |
| getCurrentUser() | Retrieves the current user |

User information is stored in browser LocalStorage.

The Redux authentication slice manages:

- user
- isAuthenticated
- loading
- error

## Task Management

The task management functionality allows users to manage their work from the dashboard.

The task management operations include:

- Add Task
- View Tasks
- Edit Task
- Delete Task
- Update Task Status

Tasks are managed centrally through the Redux task slice.

## Redux State Management

Redux Toolkit is used to manage global application state.

The Redux store combines two main slices:

### Authentication Slice

```text
src/redux/authSlice.js
```

Responsible for:

- Registering users.
- Logging users in.
- Tracking authentication status.
- Managing authentication errors.
- Logging users out.

### Task Slice

```text
src/redux/taskSlice.js
```

Responsible for:

- Adding tasks.
- Retrieving tasks.
- Updating tasks.
- Deleting tasks.
- Managing task completion status.

The Redux store is configured in:

```text
src/redux/store.js
```

## Protected Routes

React Router DOM is used to control access to application pages.

The `ProtectedRoute` component checks the authentication state before displaying the dashboard.

**Route behaviour:**

| Route | Access |
|---|---|
| /login | Public |
| /register | Public |
| /dashboard | Authenticated users only |

If a user is not authenticated, they are redirected to the login page.

## Git Collaboration

This project uses Git and GitHub for version control and team collaboration.

The recommended workflow is:

1. Clone the shared repository.
2. Create a feature branch.
3. Implement assigned functionality.
4. Commit changes with meaningful messages.
5. Push the feature branch to GitHub.
6. Create a Pull Request.
7. Request a teammate to review the changes.
8. Merge approved changes into the main branch.


## Contributors

Developed collaboratively as a team project to demonstrate practical skills in React development, Redux state management, authentication, routing, and GitHub collaboration.

**Team Members:**
## Contributors

This project was collaboratively developed by a team of five members using Git and GitHub for version control, branch management, and collaboration.

| Team Member | Contribution | GitHub Branch |
|---|---|---|
| Thomas | CRUD Operations | [feature/crud](https://github.com/Royklay/team-task-manager/tree/feature/crud) |
| Muhammed | UI Styling | [feature/styling](https://github.com/Royklay/team-task-manager/tree/feature/styling) |
| Brian | Authentication | [authentication](https://github.com/Royklay/team-task-manager/tree/authentication) |
| Roy | Project Setup, Redux Store and Integration | [main](https://github.com/Royklay/team-task-manager/tree/main) |
| David | Performance Optimization and CSS Styling | [feature/Performance](https://github.com/Royklay/team-task-manager/tree/feature/Performance) |

**Repository:** [Team Task Manager – GitHub](https://github.com/Royklay/team-task-manager)
