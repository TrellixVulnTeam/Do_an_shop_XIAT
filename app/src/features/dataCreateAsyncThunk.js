import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const url = "http://localhost:5000/api/private/read"
const urlCart = "http://localhost:5000/api/method/getItemsCart"
const getDataPizza = createAsyncThunk(
    "read/pizza",
    async () => {
        return await axios.get(`${url}/pizza`) .then(
            res=>res.data.data
        )
    }
)

const getDataSushi = createAsyncThunk(
    "read/sushi",
    async () => {
        return await axios.get(`${url}/sushi`).then(
            res=>res.data.data
        )
    }
)

const getDataPancake = createAsyncThunk(
    "read/pancake",
    async () => {
        return await axios.get(`${url}/pancake`).then(
            res=>res.data.data
        )
    }
)

const getDataHamburger = createAsyncThunk(
    "read/hamburger",
    async () => {
        return await axios.get(`${url}/hamburger`).then(
            res=>res.data.data
        )
    }
)

const getDataDumplings =  createAsyncThunk(
    "read/dumplings",
    async () => {
        return await axios.get(`${url}/dumplings`).then(
            res=>res.data.data
        )
    }
)

const getDataCupcake = createAsyncThunk(
    "read/cupcake",
    async () => {
        return await axios.get(`${url}/cupcake`).then(
            res=>res.data.data
        )
    }
)

const getDataChicken = createAsyncThunk(
    "read/chicken",
    async () => {
        return await axios.get(`${url}/chicken`).then(
            res=>res.data.data
        )
    }
)
const getDataNoodle = createAsyncThunk(
    "read/noodle",
    async () => {
        return await axios.get(`${url}/noodle`).then(
            res=>res.data.data
        )
    }
)
const getDataSalad = createAsyncThunk(
    "read/salad",
    async () => {
        return await axios.get(`${url}/salad`).then(
            res=>res.data.data
        )
    }
)

export {
    getDataPizza, getDataSushi,
    getDataHamburger, getDataPancake,
    getDataDumplings, getDataCupcake,
    getDataChicken, getDataNoodle,
    getDataSalad
}
