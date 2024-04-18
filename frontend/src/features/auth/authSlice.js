import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logInUserAction: (state, action) => {
      state.currentUser = action.payload;
    },
    logOutUserAction: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, logInUserAction, logOutUserAction } =
  authSlice.actions;

export default authSlice.reducer;
