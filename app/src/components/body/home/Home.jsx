import React, { useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import IsLoading from '../isLoading/IsLoading';
import Carousel from './Carousel';
import { useDispatch, useSelector } from "react-redux"

const Home = (data) => { 
  return (
    <Box>
      {/* {
        dataList.length != 0 ? dataList.map(
          (e) => (
            <div>
                <a href={`shop/${e}`}>{e}</a>
                <br></br>
            </div>
          )
        ):<></>
      } */}
      <Carousel />
    </Box>
    )
};

export default Home;
