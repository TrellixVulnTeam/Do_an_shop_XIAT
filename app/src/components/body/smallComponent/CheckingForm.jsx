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
import { useSelector, useDispatch } from "react-redux";
import { handleClose } from "../../../features/HandleClickToAppearCheckoutForm";

const Checkingform = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.handleClick.open);

  const dataCheckingForm = useSelector((state) => state);
  const dataforForm = dataCheckingForm.handleClick.product.payload;
  if (dataforForm == undefined) return <></>; ///////////Component loading

  const HandleClose = () => dispatch(handleClose());

  console.log(dataforForm);
  return (
    <Modal open={open} onClose={HandleClose} className="Form_Check_Infor">
      <Card className="cardForm">
        <Typography
          gutterBottom
          variant="small"
          component="div"
          className="test1"
        >
          Product successfully added to your shopping cart
        </Typography>
        <Box className="element1Card">
          <CardMedia
            component="img"
            alt="Product is selected"
            className="imageCard"
            image={dataforForm.images[0].imageUrl}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="test1"
            >
              {dataforForm.foodName}
            </Typography>
            <Typography
              gutterBottom
              variant="small"
              component="div"
              className="test1"
            >
              {dataforForm.description}
            </Typography>
            <Typography
              gutterBottom
              variant="small"
              component="div"
              className="test1"
            >
              {dataforForm.price} $
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Check out</Button>
          </CardActions>
        </Box>
      </Card>
    </Modal>
  );
};

export default Checkingform;
