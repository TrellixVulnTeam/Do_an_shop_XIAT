import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  product: {},
  logout: false,
  openSuccess: false,
};

export const HandleClickSlice = createSlice({
  name: "HandleClick",
  initialState,
  reducers: {
    handleOpen: (state, p) => {
      state.open = true;
      state.product = p;
    },
    handleClose: (state) => {
      state.open = false;
      state.product = {};
    },
    handleOpenSuccess: (state) => {
      state.openSuccess = true;
    },
    handleCloseSuccess: (state) => {
      state.openSuccess = false;
    },
    handleLogoutTrue: (state) => {
      state.logout = true;
    },
    handleLogoutFalse: (state) => {
      state.logout = false;
    },
  },
});

export const {
  handleOpen,
  handleClose,
  handleLogoutTrue,
  handleLogoutFalse,
  handleOpenSuccess,
  handleCloseSuccess,
} = HandleClickSlice.actions;

export default HandleClickSlice.reducer;
