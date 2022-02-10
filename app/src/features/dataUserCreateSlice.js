import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
};

export const getDataUserSlice = createSlice({
  name: "getDataUser",
  initialState,
  reducers: {
    getDataUser: (state, p) => {
      state.user = p;
    }
  },
});

export const { getDataUser } = getDataUserSlice.actions;
export default getDataUserSlice.reducer;
