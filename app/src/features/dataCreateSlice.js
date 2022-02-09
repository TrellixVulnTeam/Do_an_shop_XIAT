import { createSlice } from "@reduxjs/toolkit";
import {
  getDataPizza,
  getDataSushi,
  getDataHamburger,
  getDataPancake,
  getDataDumplings,
  getDataCupcake,
  getDataChicken,
  getDataNoodle,
  getDataSalad,
} from "./dataCreateAsyncThunk";

const dataPizzaSlice = createSlice({
  name: "pizza",
  initialState: {},
  extraReducers: {
    [getDataPizza.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataPizza.fulfilled]: (state, action) => {
      state.status = "success";
      state.pizza = action.payload;
    },
    [getDataPizza.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
const dataSushiSlice = createSlice({
  name: "sushi",
  initialState: {},
  extraReducers: {
    [getDataSushi.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataSushi.fulfilled]: (state, action) => {
      state.status = "success";
      state.sushi = action.payload;
    },
    [getDataSushi.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const dataHamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {},
  extraReducers: {
    [getDataHamburger.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataHamburger.fulfilled]: (state, action) => {
      state.status = "success";
      state.hamburger = action.payload;
    },
    [getDataHamburger.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const dataPancakeSlice = createSlice({
  name: "pancake",
  initialState: {},
  extraReducers: {
    [getDataPancake.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataPancake.fulfilled]: (state, action) => {
      state.status = "success";
      state.pancake = action.payload;
    },
    [getDataPancake.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
const dataCupcakeSlice = createSlice({
  name: "cupcake",
  initialState: {},
  extraReducers: {
    [getDataCupcake.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataCupcake.fulfilled]: (state, action) => {
      state.status = "success";
      state.cupcake = action.payload;
    },
    [getDataCupcake.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const dataDumplingsSlice = createSlice({
  name: "dumplings",
  initialState: {},
  extraReducers: {
    [getDataDumplings.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataDumplings.fulfilled]: (state, action) => {
      state.status = "success";
      state.dumplings = action.payload;
    },
    [getDataDumplings.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
const dataChickenSlice = createSlice({
  name: "chicken",
  initialState: {},
  extraReducers: {
    [getDataChicken.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataChicken.fulfilled]: (state, action) => {
      state.status = "success";
      state.chicken = action.payload;
    },
    [getDataChicken.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const dataNoodleSlice = createSlice({
  name: "noodle",
  initialState: {},
  extraReducers: {
    [getDataNoodle.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataNoodle.fulfilled]: (state, action) => {
      state.status = "success";
      state.noodle = action.payload;
    },
    [getDataNoodle.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const dataSaladSlice = createSlice({
  name: "salad",
  initialState: {},
  extraReducers: {
    [getDataSalad.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDataSalad.fulfilled]: (state, action) => {
      state.status = "success";
      state.salad = action.payload;
    },
    [getDataSalad.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

//Reducers
const dataPizzaReducers = dataPizzaSlice.reducer;
const dataSushiReducers = dataSushiSlice.reducer;

const dataHamburgerReducers = dataHamburgerSlice.reducer;
const dataPancakeReducers = dataPancakeSlice.reducer;

const dataDumplingsReducers = dataDumplingsSlice.reducer;
const dataCupcakeReducers = dataCupcakeSlice.reducer;

const dataChickenReducers = dataChickenSlice.reducer;
const dataSaladReducers = dataSaladSlice.reducer;

const dataNoodleReducers = dataNoodleSlice.reducer;

export {
  dataPizzaReducers,
  dataSushiReducers,
  dataPancakeReducers,
  dataHamburgerReducers,
  dataChickenReducers,
  dataSaladReducers,
  dataNoodleReducers,
  dataCupcakeReducers,
  dataDumplingsReducers,
};
