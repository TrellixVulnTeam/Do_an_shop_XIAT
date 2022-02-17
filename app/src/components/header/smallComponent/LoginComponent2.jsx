import React, { useState } from "react";
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

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  handleLogoutFalse,
  handleLogoutTrue,
} from "../../../features/HandleClickToAppearCheckoutForm";
import { useDispatch } from "react-redux";

const Logincomponent2 = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const HandleClick = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      dispatch(handleLogoutTrue());
    } else {
      dispatch(handleLogoutFalse());
    }
  };

  return (
    <Box>
      <Button
        className="icon_login"
        onClick={() => {
          HandleClick();
        }}
      >
        <AccountCircleIcon />
      </Button>
    </Box>
  );
};

export default Logincomponent2;
