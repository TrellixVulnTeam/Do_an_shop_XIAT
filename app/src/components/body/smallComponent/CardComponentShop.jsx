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

const CardComponentShop = ({ data }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     // duration: 10,
  //     // easing: 'ease-in-sine',
  //     // delay: 10,
  //   });
  // }, []);d2

  //dropDown button
  ///////////Function handle event
  const [toggleClick, setToggleClick] = useState(false);
  const handleToggleHover = () => setToggleClick(true);
  const handleToggleLeave = () => setToggleClick(false);

  const classNameChangeColor = toggleClick ? "hoverImageCard" : "dispayNone";
  //data-aos="zoom-in-down"
  return (
    <Card className="childElementCard">
      <CardActions
        onMouseEnter={handleToggleHover}
        onMouseLeave={handleToggleLeave}
        onClick={() => dispatch(handleOpen(data))}
      >
        <Box className={classNameChangeColor}>
          <Button
            className="hoverButton"
            underline="none"
          >
            View
          </Button>
        </Box>
        <CardMedia
          component="img"
          alt="This is product"
          className="imageCard"
          image={data.images[0].imageUrl}
        />
        <CardContent className="Content_Product">
            <Typography
              gutterBottom
              variant="p"
              component="div"
              className="textNameFood"
            >
              {data.foodName}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              className="textNameFood"
            >
              {data.price} $
            </Typography>
          </CardContent>
      </CardActions>
    </Card>
  );
};

export default CardComponentShop;
