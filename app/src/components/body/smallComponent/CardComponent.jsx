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
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";

//////////////Actions

import {
  handleOpen,
  handlClose,
} from "../../../features/HandleClickToAppearCheckoutForm";

const CardComponent = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      offset: 200,
      // duration: 10,
      // easing: 'ease-in-sine',
      // delay: 10,
    });
  }, []);

  //dropDown button
  ///////////Function handle event
  const [toggleClick, setToggleClick] = useState(false);
  const handleToggleHover = () => setToggleClick(true);
  const handleToggleLeave = () => setToggleClick(false);

  const classNameChangeColor = toggleClick ? "hoverImageCard" : "dispayNone";

  // const testData1 = useSelector((state) => state);
  // console.log(testData1);

  return (
    <Card className="childElementCard" data-aos="zoom-in-down">
      <CardActions
        onMouseEnter={handleToggleHover}
        onMouseLeave={handleToggleLeave}
      >
        {/* <Link href="#"variant="body1"  underline="none"> */}
        <Box className={classNameChangeColor}>
          <Button
            className="hoverButton"
            underline="none"
            onClick={() => dispatch(handleOpen(data))}
          >
            Add to Card
          </Button>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="textNameFood"
            >
              {data.foodName}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="textNameFood"
            >
              {data.price} $
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          alt="This is product"
          className="imageCard"
          image={data.images[0].imageUrl}
        />
        {/* </Link> */}
      </CardActions>
    </Card>
  );
};

export default CardComponent;
