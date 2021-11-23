import { createSlice } from "@reduxjs/toolkit";

const remainingTasksSlice = createSlice({
  name: "remainingTasks",
  initialState: 0,
  reducers: {
    updateRemainingTasks: (state, action) => {
      return action.payload;
    },
  },
});

// Selectors
export const selectRemainingTasksSlice = (state) => state.remainingTasksReducer;

// Actions
export const { updateRemainingTasks } = remainingTasksSlice.actions;

// Reducers
export default remainingTasksSlice.reducer;
