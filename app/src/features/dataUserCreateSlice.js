import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  checkLogin: false,
};

export const getDataUserSlice = createSlice({
  name: "getDataUser",
  initialState,
  reducers: {
    getDataUser: (state, p) => {
      state.user = p;
    },
    checkLoginTrue: (state) => {
      state.checkLogin = true;
    },
    checkLoginFalse: (state) => {
      state.checkLogin = false;
    }
  },
});

export const {
  getDataUser,
  checkLoginTrue,
  checkLoginFalse,
} = getDataUserSlice.actions;

export default getDataUserSlice.reducer;
