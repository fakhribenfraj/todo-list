import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    replaceTodo(state, action) {
      state.tasks = action.payload.tasks;
    },
    addTaskToList(state, action) {
      const newTask = action.payload;
      state.tasks.push({
        id: newTask.id,
        value: newTask.value,
        category: newTask.category,
        priority: newTask.priority,
        checked: newTask.checked,
      });
    },
    checkTask(state, action) {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (existingTask) {
        existingTask.checked = action.payload.checked;
      }
    },
    deleteTaskFromList(state, action) {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (existingTask) {
        state.tasks = state.tasks.filter((task) => task.id !== existingTask.id);
      }
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
