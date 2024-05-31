import { configureStore } from "@reduxjs/toolkit";
import currentRunSlice from "./currentRunSlice.js";

const store = configureStore({
  reducer: {
    currentRun: currentRunSlice,
  },
});

export default store;
