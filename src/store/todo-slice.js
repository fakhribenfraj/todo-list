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
    removeTaskFromList(state, action) {
      // const id = action.payload;
      // const existingItem = state.items.find((item) => item.id === id);
      // state.totalQuantity--;
      // state.changed = true;
      // if (existingItem.quantity === 1) {
      //   state.items = state.items.filter((item) => item.id !== id);
      // } else {
      //   existingItem.quantity--;
      //   existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      // }
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
