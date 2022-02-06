import { createSlice } from "@reduxjs/toolkit"
import {
    getDataPizza, getDataSushi, getDataHamburger,
    getDataPancake,
    getDataDumplings, getDataCupcake
} from "./dataCreateAsyncThunk"
    

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
    }
})

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
    }
})

const dataHamburgerSlice = createSlice({
    name: "sushi",
    initialState: {},
    extraReducers: {
        [getDataHamburger.pending]: (state, action) => {
            state.status = "loading";
        },
        [getDataHamburger.fulfilled]: (state, action) => {
          state.status = "success";
          state.sushi = action.payload;
        },
        [getDataHamburger.rejected]: (state, action) => {
            state.status = "failed";
        },
    }
})

const dataPancakeSlice = createSlice({
    name: "sushi",
    initialState: {},
    extraReducers: {
        [getDataPancake.pending]: (state, action) => {
            state.status = "loading";
        },
        [getDataPancake.fulfilled]: (state, action) => {
          state.status = "success";
          state.sushi = action.payload;
        },
        [getDataPancake.rejected]: (state, action) => {
            state.status = "failed";
        },
    }
})

const dataDumplingsSlice = createSlice({
    name: "sushi",
    initialState: {},
    extraReducers: {
        [getDataDumplings.pending]: (state, action) => {
            state.status = "loading";
        },
        [getDataDumplings.fulfilled]: (state, action) => {
          state.status = "success";
          state.sushi = action.payload;
        },
        [getDataDumplings.rejected]: (state, action) => {
            state.status = "failed";
        },
    }
})
    
const dataCupcakeSlice = createSlice({
    name: "sushi",
    initialState: {},
    extraReducers: {
        [getDataCupcake.pending]: (state, action) => {
            state.status = "loading";
        },
        [getDataCupcake.fulfilled]: (state, action) => {
          state.status = "success";
          state.sushi = action.payload;
        },
        [getDataCupcake.rejected]: (state, action) => {
            state.status = "failed";
        },
    }
})



//Reducers

const dataPizzaReducers = dataPizzaSlice.reducer
const dataSushiReducers = dataSushiSlice.reducer
const dataHamburgerReducers = dataHamburgerSlice.reducer
const dataPancakeReducers = dataPancakeSlice.reducer
const dataDumplingsReducers = dataDumplingsSlice.reducer
const dataCupcakeReducers = dataCupcakeSlice.reducer

export {
    dataPizzaReducers, dataSushiReducers,
    dataPancakeReducers, dataHamburgerReducers,
    dataCupcakeReducers,dataDumplingsReducers
};