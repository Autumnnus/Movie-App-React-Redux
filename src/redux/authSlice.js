import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("jwtToken") || null,
  userID: localStorage.getItem("userID") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createLocalToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("jwtToken", action.payload);
    },
    setUserID: (state, action) => {
      state.userID = action.payload;
      localStorage.setItem("userID", action.payload);
    },
    signOut: (state) => {
      state.token = null;
      state.userID = null;
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("userID");
    },
  },
});

export const { createLocalToken, setUserID, signOut } = authSlice.actions;

export default authSlice.reducer;
