import { configureStore } from "@reduxjs/toolkit";
import { vipReducer } from "./vip/vipSlice";

export const store = configureStore({
  reducer: {
    vip: vipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
