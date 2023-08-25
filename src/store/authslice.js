import { createSlice } from "@reduxjs/toolkit";
const initialstate = { login: null, token: null, loginsuccess: null };

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    login(state, action) {
      state.loginsuccess = true;
    },
    setAuth(state, action) {
      state.login = action.payload.login;
      state.token = action.payload.token;
      // console.log(action.payload);
    },
    logout(state, action) {
      state.login = null;
      state.token = null;
    },
  },
});

export const AuthSliceAction = AuthenticationSlice.actions;
export default AuthenticationSlice;
