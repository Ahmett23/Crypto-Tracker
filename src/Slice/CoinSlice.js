import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cons: [],
  status: "idle",
  error: null,
};

export const fetchCoins = createAsyncThunk("coin/fetchCoins", async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );
  return response.data;
});

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cons = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default coinSlice.reducer;
