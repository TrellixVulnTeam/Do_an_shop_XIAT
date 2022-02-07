import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  product: {},
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
    getDataHandleClickPayload: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { handleOpen, handleClose, getDataHandleClickPayload } =
  HandleClickSlice.actions;

export default HandleClickSlice.reducer;
