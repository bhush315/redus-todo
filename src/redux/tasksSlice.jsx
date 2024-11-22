import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.description = description;
        existingTask.isDone = isDone;
      }
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, toggleTaskStatus, setFilter } =
  tasksSlice.actions;

export const selectTasks = (state) => {
  const { tasks, filter } = state.tasks;
  if (filter === "done") {
    return tasks.filter((task) => task.isDone);
  }
  if (filter === "not-done") {
    return tasks.filter((task) => !task.isDone);
  }
  return tasks;
};

export default tasksSlice.reducer;
