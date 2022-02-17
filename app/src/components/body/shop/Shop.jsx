import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
  Modal,  
} from "@mui/material";
import Cookies from "universal-cookie";
import { Route, Routes, useParams } from "react-router-dom";
import CardComponentShop from "../smallComponent/CardComponentShop";
import Checkingform from "../smallComponent/CheckingForm";

const Shop = ({ allData, isReady }) => {
  const cookies = new Cookies();

  useEffect(() => {
    cookies.set("username=John Doe", "expired=12s", { path: "/" });
  }, []);

  if (!isReady) {
    return <></>;
  }

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
      </Typography>
      <Box className="AllProductShop">
        {allData.map((e, index) => (
          <Box key={index} >
            <CardComponentShop data={e}/>
          </Box>
        ))}
         <Checkingform/>
      </Box>
    </Box>
  );
};

export default Shop;
