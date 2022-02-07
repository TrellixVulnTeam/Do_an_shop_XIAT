import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  Link,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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
} from "../../../features/dataCreateAsyncThunk";
import CardComponent from "../smallComponent/CardComponent";

const DemoProduct = () => {
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
  //CardComponent

  return (
    <Box className="sliderProduct">
      {demoProduct.map((e) => (
        <CardComponent data={e} />
      ))}
    </Box>
  );
};

export default DemoProduct;
