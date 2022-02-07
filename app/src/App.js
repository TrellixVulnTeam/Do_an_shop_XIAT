import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/body/home/Home";
import Shop from "./components/body/shop/Shop";
import Footer from "./components/footer/Footer";
import FoodBranch from "./components/body/shop/DetailProduct";
import Login from "./components/body/helper/login/Login";
//Action

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
} from "./features/dataCreateAsyncThunk";

const App = () => {
  const dispatch = useDispatch();

  const pizza = useSelector((state) => state.pizza.pizza);
  const chicken = useSelector((state) => state.chicken.chicken);
  const sushi = useSelector((state) => state.sushi.sushi);
  const pancake = useSelector((state) => state.pancake.pancake);
  const hamburger = useSelector((state) => state.hamburger.hamburger);
  const salad = useSelector((state) => state.salad.salad);
  const noodle = useSelector((state) => state.noodle.noodle);
  const cupcake = useSelector((state) => state.cupcake.cupcake);
  const dumplings = useSelector((state) => state.dumplings.dumplings);

  const isReady =
    pizza !== undefined &&
    sushi !== undefined &&
    chicken !== undefined &&
    pancake !== undefined &&
    hamburger !== undefined &&
    salad !== undefined &&
    noodle !== undefined &&
    cupcake !== undefined &&
    dumplings !== undefined;

  useEffect(async () => {
    await dispatch(getDataPizza());
    await dispatch(getDataSushi());
    await dispatch(getDataHamburger());
    await dispatch(getDataPancake());
    await dispatch(getDataDumplings());
    await dispatch(getDataCupcake());
    await dispatch(getDataChicken());
    await dispatch(getDataNoodle());
    await dispatch(getDataSalad());
  }, [dispatch]);

  if (!isReady) {
    return <p>Is loading</p>;
  }

  const demoProduct = [
    pizza[0],
    chicken[0],
    sushi[0],
    pancake[0],
    hamburger[0],
    salad[0],
    noodle[0],
    cupcake[0],
    dumplings[0],
  ];

  //pizza chicken sushi pancake hamburger salad noodle cupcake dumplings

  const allData = pizza.concat(
    chicken.concat(
      sushi.concat(
        pancake.concat(
          hamburger.concat(
            salad.concat(noodle.concat(cupcake.concat(dumplings)))
          )
        )
      )
    )
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="shop"
            element={<Shop allData={allData} isReady={isReady} />}
          ></Route>
          <Route
            path="/product/:slug"
            element={<FoodBranch allData={allData} isReady={isReady} />}
          ></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
