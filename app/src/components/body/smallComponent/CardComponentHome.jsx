////Library npm
import React, { useState, useEffect } from "react";
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
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";

//////////////Actions

import {
  handleOpen,
  handlClose,
} from "../../../features/HandleClickToAppearCheckoutForm";

const CardComponentHome = ({ data }) => {

  return (
    <Card className="childElementCard">
      <CardMedia
        component="img"
        alt="This is product"
        className="imageCard"
        image={data.img.images[0].imageUrl}
      />
      <CardContent>
        <Typography
          className="Go_foodName text_NameFood"
          gutterBottom
          variant="h6"
          component="div"
        >
          {data.img.foodName}
        </Typography>
        <Link href={`/shop/${data.name}`}>
          <Button className="Go_foodName button_Go">Go to products</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CardComponentHome;
