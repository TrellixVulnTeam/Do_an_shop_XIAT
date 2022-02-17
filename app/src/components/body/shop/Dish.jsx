import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CardComponentShop from "../smallComponent/CardComponentShop";
import Checkingform from "../smallComponent/CheckingForm";
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

const Dish = () => {
  const url = useParams().slug;
  const allData = useSelector((state) => state);
  let data = [];
  Object.keys(allData).map((key) => {
    if (key == url) data = Object.entries(allData[key]);
  });
  const nameDish = data[1][0];
  const data1 = data[1][1];

  return (
    <Box className="ShopComponent">
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        className=""
        style={{
          paddingLeft: "3vw",
          paddingTop: "1vw",
          outline: "none",
          color: "black",
        }}
      >
        /
        <Link href="/shop" underline="none">
          Shop
        </Link>
        / {nameDish}
      </Typography>
      <Box className="AllProductShop">
        {data1.map((e, index) => (
          <CardComponentShop data={e} key={index} />
        ))}
        <Checkingform />
      </Box>
    </Box>
  );
};

export default Dish;
