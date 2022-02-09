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

const Footer = () => {
  const contentFooter = [
    "ABOUT FOOD",
    "CONTACT US",
    "PHONE NUMBER",
    "BLOG ",
    "QUESTION FOR US",
    "SUPPORT"
  ];

  return (
    <Box className="footer_Component">
      <Box className="child_footer_Component">
        {contentFooter.map((e) => (
          <Typography
            gutterBottom
            variant="p"
            component="div"
            className="textNameFood"
          >
            {e}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
