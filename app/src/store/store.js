import { configureStore } from "@reduxjs/toolkit"
import {
    dataPizzaReducers, dataSushiReducers,
    dataPancakeReducers, dataHamburgerReducers,
    dataCupcakeReducers, dataDumplingsReducers
} from "../features/dataSlice"


export const store = configureStore({
    reducer: {
        pizza: dataPizzaReducers,
        sushi: dataSushiReducers,
        pancake: dataPancakeReducers,
        hamburger: dataHamburgerReducers,
        cupcake: dataCupcakeReducers,
        dumplings: dataDumplingsReducers
    }
})



