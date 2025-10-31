import { createSlice } from "@reduxjs/toolkit";

const competitorSlice = createSlice({
  name: "competitor",
  initialState: {
    currentCompetitor: null,
  },
  reducers: {
    setCurrentCompetitor: (state, action) => {
      state.currentCompetitor = action.payload;
    },
    resetState: (state) => {
      state.currentCompetitor = null;
    },
  },
});

export const { setCurrentCompetitor, resetState } = competitorSlice.actions;
export default competitorSlice.reducer;
