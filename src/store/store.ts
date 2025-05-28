import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import apiSlice from "../api/apiSlice";
import queryReducer from "./querySlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    query: queryReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
