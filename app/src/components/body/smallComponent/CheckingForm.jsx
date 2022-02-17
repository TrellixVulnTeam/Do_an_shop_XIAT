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
import Cookies from "universal-cookie";
import { Authorization } from "../../../store/AxiosLibrary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
//
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../../../features/dataUserCreateSlice";

///API

import { handleClose } from "../../../features/HandleClickToAppearCheckoutForm";
import { addToCart } from "../../../store/AxiosLibrary";

import Cart from "../cart/Cart";

/////////////////////////////////////////////////////////////////////////////////////////

const Checkingform = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [callback, setCallback] = useState(false);
  const [count, setCount] = useState(1);
  const open = useSelector((state) => state.handleClick.open);
  const dataCheckingForm = useSelector((state) => state);
  const checkLogin = useSelector((state) => state.user.checkLogin);
  const dataforForm = dataCheckingForm.handleClick.product.payload;
  const userID = useSelector((state) => state.user.user.payload);

  //If user login push product in array product in mongodb alas
  //else redirect to /login

  const HandleClose = () => {
    dispatch(handleClose());
    setCount(1);
  };

  useEffect(async () => {
    if (callback === true) {
      if (cookies.get("accessToken") != undefined) {
        const headers = {
          Authorization: "Bearer " + cookies.get("accessToken"),
        };
        await Authorization({}, { headers: headers }).then(async (res) => {
          await dispatch(getDataUser(res.data));
        });
      }
      setCallback(false);
    }
  });

  const handleClick = async (data) => {
    //AddtoCart--->onClick if login -->put method to   server side
    if (!checkLogin) {
      navigate("/login");
    } else {
      const singleCart = {
        _id: userID.dataUser._id,
        quality: count,
        _id_Product: data._id,
        price: data.price,
      };
      addToCart(singleCart);
    }
    HandleClose();
    setCallback(true);
  };

  if (dataforForm === undefined) return <></>; ///////////Component loading

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
          <Button onClick={() => setCount(count + 1)}>
            <AddIcon />
          </Button>
          {count}
          <Button
            onClick={() => {
              setCount(count > 1 ? count - 1 : 1);
            }}
          >
            <RemoveIcon />
          </Button>
          <CardActions className="Button_CheckingForm">
            <Link href="/cart" underline="none">
              <Button>Go to cart </Button>
            </Link>
            <Button onClick={() => handleClick(dataforForm)}>
              Add to cart
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Modal>
  );
};

export default Checkingform;
