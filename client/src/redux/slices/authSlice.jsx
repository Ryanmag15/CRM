import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        logged: false,
    },
    reducers: {
        changeUser: (state, { payload }) => {
            return { ...state, user: payload, logged: true };
        },
        logout: state => {
            return { ...state, user: {}, logged: false };
        },
    },
});

export const { changeUser, logout } = authSlice.actions;

export default authSlice.reducer;
