
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",

  initialState: {
    tasks: [],
  },

  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    editTask: (state, action) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload.id
      );

      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
      }
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },

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
  editTask,
  deleteTask,
  toggleTaskStatus,
} = taskSlice.actions;

export default taskSlice.reducer;
