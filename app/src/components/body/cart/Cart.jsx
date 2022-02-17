import React, { useEffect, useState } from "react";
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
///////////////////////////////////////////////////////////////////////////////////////////////////
import Emptycart from "../isLoading/EmptyCart";
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
import Childcomponenttable from "./ChildComponentTable";
import IsLoading from "../isLoading/IsLoading";

const Cart = ({ allData }) => {
  const dataaa = useSelector((state) => state);
  const dispatch = useDispatch();

  const data1 = dataaa.user.user.payload;

  // console.log(allData); //props.allData._id===cart._id_Product return e

  const dataProduct = [];

  const undefinedDataUser = data1 !== undefined;

  if (undefinedDataUser) {
    const cart = data1.dataUser.cart;
    const id_User = data1.dataUser._id;
    const arr = [];
    for (let i = 0; i < cart.length; i++) {
      let value_ID = cart[i]._id_Product;
      allData.filter((e) => {
        if (e._id === value_ID) {
          // arr.push(e)
          let { foodName, images, price } = e;
          let obj = {
            foodName: foodName,
            images: images,
            price: price,
            quality: cart[i].quality,
            id_cart: e._id,
            id_User: id_User,
          };
          arr.push(obj);
        }
      });
    }

    const titleTopTable = ["Product", "Quality", "Total"];
    if (arr.length === 0) {
      return (
        <>
          <Emptycart />
        </>
      );
    }
    return (
      <Box className="cardFormCart">
        <Card className="Form">
          <CardContent>
            <Box className="topTable">
              {titleTopTable.map((e) => (
                <Typography
                  className="element"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {e}
                </Typography>
              ))}
            </Box>
            <Box>
              {arr.map(
                (
                  e ////Component -->map we have private state
                ) => (
                  <Childcomponenttable data={e} />
                )
              )}
            </Box>
            <Box className="CheckingButton">
              <Link href="/shop" underline="none">
                <Button className="backButton">Back</Button>
              </Link>
              <Link href="/checkout" underline="none">
                <Button className="checkoutButton">Checkout</Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  } else if (undefinedDataUser) {
    return (
      <div>
        <IsLoading />
      </div>
    );
  }

  return (
    <>
      <Emptycart />
    </>
  );
};

export default Cart;
