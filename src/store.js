import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./Slice/CoinSlice";
import modalReducer from "./Slice/modalSlice";
import competitorReducer from "./Slice/competitorSlice";

const store = configureStore({
  reducer: {
    coin: coinReducer,
    modal: modalReducer,
    competitor: competitorReducer,
  },
});

export default store;
