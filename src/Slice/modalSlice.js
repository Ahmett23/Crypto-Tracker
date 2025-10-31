import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleModal } = modalSlice.actions;
export default modalSlice.reducer;
