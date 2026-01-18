import { createSlice } from "@reduxjs/toolkit";

const getInitialUsers = () => {
  const localUsers = localStorage.getItem("cineStream_users");
  if (localUsers) return JSON.parse(localUsers);

  const defaultUsers = [
    {
      id: "1",
      username: "Admin",
      email: "admin@stream.com",
      password: "admin",
      role: "Administrator",
    },
  ];
  localStorage.setItem("cineStream_users", JSON.stringify(defaultUsers));
  return defaultUsers;
};

const initialState = {
  user: getInitialUsers(),
  loginMode: true,
  loginSuccessful: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUserFunc: (state, action) => {
      const newUser = {
        ...action.payload,
        id: (state.user.length + 1).toString(),
        role: "Streamer",
      };
      state.user = [...state.user, newUser];
      localStorage.setItem("cineStream_users", JSON.stringify(state.user));
    },
    toggleLoginMode: (state) => {
      state.loginMode = !state.loginMode;
    },
    toggleLoginSuccessful: (state) => {
      state.loginSuccessful = !state.loginSuccessful;
    },
  },
});

export const { registerUserFunc, toggleLoginMode, toggleLoginSuccessful } =
  userSlice.actions;

export default userSlice.reducer;
