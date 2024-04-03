import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, todo: todoReducer },
});
