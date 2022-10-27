import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";

export const authStore = configureStore({
    reducer: {
        auth: authReducer,
    },
});
