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
    <Box className="icon_login">
      <Link href="/login" underline="none">
        <Button >Login/Sign up</Button>
      </Link>
    </Box>
  );
};

export default Logincomponent1;
