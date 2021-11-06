import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    statuses: {},
  },
  reducers: {
    showAddModal(state, action) {
      state.statuses.addStatus = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
