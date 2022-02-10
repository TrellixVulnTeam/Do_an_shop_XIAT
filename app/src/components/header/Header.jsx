import React from "react";
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

import Cart1 from "./smallComponent/Cart1";
import LoginComponent1 from "./smallComponent/LoginComponent1";
import LoginComponent2 from "./smallComponent/LoginComponent2";

const Header = ({ checkAcessToken }) => {
  console.log(checkAcessToken);
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
