// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
