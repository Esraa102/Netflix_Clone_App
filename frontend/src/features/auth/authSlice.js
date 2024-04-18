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
    logInUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logOutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, logInUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
