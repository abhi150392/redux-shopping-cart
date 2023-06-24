import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isShow: false },
  reducers: {
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
