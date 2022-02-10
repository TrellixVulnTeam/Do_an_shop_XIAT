import { configureStore } from "@reduxjs/toolkit";

//Get data product
import {
  dataPizzaReducers,
  dataSushiReducers,
  dataPancakeReducers,
  dataHamburgerReducers,
  dataChickenReducers,
  dataSaladReducers,
  dataNoodleReducers,
  dataCupcakeReducers,
  dataDumplingsReducers,
} from "../features/dataCreateSlice";

//Handle Click
import HandleClickReducer from "../features/HandleClickToAppearCheckoutForm";

//User
import getDataUserReducer from "../features/dataUserCreateSlice";

export const store = configureStore({
  reducer: {
    pizza: dataPizzaReducers,
    sushi: dataSushiReducers,
    pancake: dataPancakeReducers,
    hamburger: dataHamburgerReducers,
    cupcake: dataCupcakeReducers,
    dumplings: dataDumplingsReducers,
    chicken: dataChickenReducers,
    salad: dataSaladReducers,
    noodle: dataNoodleReducers,
    handleClick: HandleClickReducer,
    user: getDataUserReducer,
  },
});
