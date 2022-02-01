import React, { useEffect } from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import {
    Link
} from "react-router-dom";
import { getData } from '../../../features/dataSlice';
import { useDispatch,useSelector } from 'react-redux';

const FoodBranch = () => {
     const dispatch = useDispatch();
    const { data } = useSelector(state => state.data)
    console.log(data)

    useEffect(() => {   
      dispatch(getData())
    }, [dispatch])

        return (
            <Box className="allProduct_shop">
              
            </Box>
           
        )
};

export default FoodBranch;
