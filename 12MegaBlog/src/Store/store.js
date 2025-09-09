// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";  // ✅ import your slice

const store = configureStore({
  reducer: {
    auth: authReducer,  // ✅ must have at least one reducer
  },
});

export default store;
