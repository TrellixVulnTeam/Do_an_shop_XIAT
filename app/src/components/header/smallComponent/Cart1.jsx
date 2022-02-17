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
  Paper,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart1 = () => {
  return (
    <Box className="Cart_1">
        <Button>
          <ShoppingCartIcon />
        </Button>
    </Box>
  );
};

export default Cart1;
