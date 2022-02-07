import React, { useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import IsLoading from '../isLoading/IsLoading';
import Carousel from './Carousel';
import { useDispatch, useSelector } from "react-redux"
import DemoProduct from "./DemoProduct"

const Home = () => { 
  
  return (
    <Box>
      <Carousel />
      <DemoProduct />
    </Box>
    )
};

export default Home;
