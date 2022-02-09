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
import Isloading from "../isLoading/IsLoading";
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
import CardComponentHome from "../smallComponent/CardComponentHome";

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
    return <></>
  }

  const demoProduct = [
    { name: "pizza", img: pizza[0] },
    { name: "chicken", img: chicken[0] },
    { name: "sushi", img: sushi[0] },
    { name: "pancake", img: pancake[0] },
    { name: "hamburger", img: hamburger[0] },
    { name: "salad", img: salad[0] },
    { name: "noodle", img: noodle[0] },
    { name: "cupcake", img: cupcake[0] },
    { name: "dumplings", img: dumplings[0] },
  ];
  //CardComponentHome

  return (
    <Box>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        className="textNameFood"
        style={{
          fontSize: "3.5vh",
        }}
      >
        Features Dish
      </Typography>
      <Box className="sliderProduct">
        {demoProduct.map((e, index,name) => (
          <CardComponentHome data={e} key={index} name={name}/>
        ))}
      </Box>
    </Box>
  );
};

export default DemoProduct;
