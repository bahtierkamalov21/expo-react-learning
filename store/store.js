import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./reducer.js";

export const store = configureStore({
  reducer: {
    index: indexReducer,
  },
});
