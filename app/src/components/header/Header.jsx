import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

//////////////////////////////////////////////
import Cart1 from "./smallComponent/Cart1";
import Cart2 from "./smallComponent/Cart2";
import LoginComponent1 from "./smallComponent/LoginComponent1";
import LoginComponent2 from "./smallComponent/LoginComponent2";

const Header = ({ checkAcessToken }) => {
  const cart = useSelector((state) => state.user.user.payload);

  if (cart !== undefined) {
    //////////Khong su dung use Effect duoc vi co return
    // console.log(subTotal)
    return (
      <Box className="Header_Component">
        <Box>
          <Link href="/" underline="none">
            <img
              src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png"
              alt=""
              style={{
                objectFit: "cover",
                maxHeight: "13vh",
                maxWidth: "13vh",
              }}
            />
          </Link>
        </Box>
        <Box className="Icon_header">
          {cart.dataUser.cart.length === 0 ? <Cart1 /> : <Cart2 />}
          {checkAcessToken ? <LoginComponent2 /> : <LoginComponent1 />}
        </Box>
      </Box>
    );
  }

  return (
    <Box className="Header_Component">
      <Link href="/" underline="none">
        <img
          src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png"
          alt=""
          style={{ objectFit: "cover", maxHeight: "13vh", maxWidth: "13vh" }}
        />
      </Link>
      <Box className="Icon_header">
        <Link href="/cart" underline="none">
          <Cart1 />
        </Link>
        {checkAcessToken ? <LoginComponent2 /> : <LoginComponent1 />}
      </Box>
    </Box>
  );
};

export default Header;
