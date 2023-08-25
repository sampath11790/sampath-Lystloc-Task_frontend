// store.js
import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todoSlice";
import AuthenticationSlice from "./authslice";

const Store = configureStore({
  reducer: { todo: todosSlice.reducer, auth: AuthenticationSlice.reducer },
});

export default Store;
