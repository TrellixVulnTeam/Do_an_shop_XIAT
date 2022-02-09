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

const Logincomponent1 = () => {
  return (
    <Box className="LoginComponent">
      <Link href="/login" underline="none">
        <Button className="button_login_1">Login/Sign up</Button>
      </Link>
    </Box>
  );
};

export default Logincomponent1;
