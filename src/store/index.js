import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./UI/ui-slice";
import todoSlice from "./todo/todo-slice";
import modalSlice from "./modal/modal-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    todo: todoSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
