import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features redux/userSlice";
import logger from "redux-logger";
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  reducer: {
    user: userReducer,
  },
});
