import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    // Add a new task
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    // Delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },

    // Edit a task
    editTask: (state, action) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload.id
      );

      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
      }
    },

    // Change task status
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );

      if (task) {
        task.status =
          task.status === "Pending" ? "Completed" : "Pending";
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  toggleTaskStatus,
} = taskSlice.actions;

export default taskSlice.reducer;