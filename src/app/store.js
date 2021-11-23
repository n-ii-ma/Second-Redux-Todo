import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/taskSlice";
import remainingTasksReducer from "../features/remainingTasks/remainingTasksSlice";

const preloadedState = localStorage.getItem("reduxTasks")
  ? JSON.parse(localStorage.getItem("reduxTasks"))
  : {};

const store = configureStore({
  reducer: {
    taskReducer,
    remainingTasksReducer,
  },
  preloadedState,
});

store.subscribe(() =>
  localStorage.setItem("reduxTasks", JSON.stringify(store.getState()))
);

export default store;
