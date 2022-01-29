import React, { useEffect} from 'react';
import { CardProduct } from './CardProduct';
// import getData from "./features/dataSlice"
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import Home from '../home/Home';
import Header from ".../"
const Allproduct = () => {

    // const dispatch = useDispatch()
    // const { data } = useSelector((state) => state.data);
    // console.log(data)
    // useEffect(() => {
    //   dispatch(getData());
    // }, [dispatch]);

    return (
        <Box className="AllProduct">
          <p>There are all products</p>
        </Box>
    )
  
};

export default Allproduct;
