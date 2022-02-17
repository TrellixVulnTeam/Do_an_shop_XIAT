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
import { useSelector } from "react-redux";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Cart2 = () => {
  const cart = useSelector((state) => state.user.user.payload);
  let quality = 0;
  const arrCart = cart.dataUser.cart;
  arrCart.map((e) => {
    quality += e.quality;
  });

  return (
    <Box className="Cart_2">
      <Box>
        <Link href="/cart" underline="none" className="">
          <Box>
            <BusinessCenterIcon />
          </Box>
          <Box>
            <Typography
              className="qualityText"
              gutterBottom
              variant="p"
              component="div"
            >
              {quality}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Cart2;
