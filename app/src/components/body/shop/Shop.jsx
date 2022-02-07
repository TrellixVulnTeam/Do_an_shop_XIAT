import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import { Link, Route, Routes, useParams } from "react-router-dom";
import CardComponent from "../smallComponent/CardComponent";
import Checkingform from "../smallComponent/CheckingForm";

const Shop = ({ allData, isReady }) => {
  if (!isReady) {
    return <p>Loading.............</p>;
  }

  return (
    <Box className="AllProductShop">
      {allData.map((e, index) => (
        <CardComponent data={e} key={index} />
      ))}
      <Checkingform />
    </Box>
  );
};

export default Shop;
