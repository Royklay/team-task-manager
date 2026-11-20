import { configureStore } from "@reduxjs/toolkit";

// Create our central Redux store
export const store = configureStore({
    reducer: {
        // Our authentication and task reducers
        // will be added here 
    },
});