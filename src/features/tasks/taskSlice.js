
import { createSlice } from "@reduxjs/toolkit";

// Initial tasks
const initialState = {
  tasks: [
    {
      id: 1,
      title: "Design homepage",
      description: "Create the main homepage layout.",
      status: "Pending",
    },
    {
      id: 2,
      title: "Set up authentication",
      description: "Implement login and registration.",
      status: "Pending",
    },
    {
      id: 3,
      title: "Create dashboard",
      description: "Build the team dashboard.",
      status: "Pending",
    },
    {
      id: 4,
      title: "Implement task management",
      description: "Add task creation and editing.",
      status: "Pending",
    },
    {
      id: 5,
      title: "Test application",
      description: "Test the application functionality.",
      status: "Completed",
    },
  ],
};

// Create task slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        ...action.payload,
      });
    },

    // Delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },

    // Edit a task
    editTask: (state, action) => {
      const { id, title, description } = action.payload;

      const task = state.tasks.find(
        (task) => task.id === id
      );

      if (task) {
        task.title = title;
        task.description = description;
      }
    },

    // Toggle task status
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );

      if (task) {
        task.status =
          task.status === "Pending"
            ? "Completed"
            : "Pending";
      }
    },
  },
});

// Export actions
export const {
  addTask,
  deleteTask,
  editTask,
  toggleTaskStatus,
} = taskSlice.actions;

// Export reducer
export default taskSlice.reducer;
