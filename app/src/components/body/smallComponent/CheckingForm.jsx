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
  Link,
} from "@mui/material";
import { Route, Routes, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleClose } from "../../../features/HandleClickToAppearCheckoutForm";

const Checkingform = () => {
  const dispatch = useDispatch();
  const testData = useSelector(state=>state)
  console.log(testData)
  const open = useSelector((state) => state.handleClick.open);
  const dataCheckingForm = useSelector((state) => state);
  const dataforForm = dataCheckingForm.handleClick.product.payload;
  if (dataforForm == undefined) return <></>; ///////////Component loading

  const HandleClose = () => dispatch(handleClose());

  return (
    <Modal open={open} onClose={HandleClose} className="Form_Check_Infor">
      <Card className="cardForm">
        <Box className="elementCard">
          <CardMedia
            component="img"
            alt="Product is selected"
            className="imageCard"
            image={dataforForm.images[0].imageUrl}
          />
        </Box>
        <Box className="elementCard">
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
          <CardActions className="Button_CheckingForm">
            <Link href="/cart" underline="none">
              <Button>Go to cart</Button>
            </Link>
            <Button>Add to cart</Button>
          </CardActions>
        </Box>
      </Card>
    </Modal>
  );
};

export default Checkingform;
