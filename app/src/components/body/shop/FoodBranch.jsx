import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import {
    useParams
} from "react-router-dom";
import axios from "axios"
import { getData } from '../../../features/dataSlice';
import { useDispatch, useSelector } from "react-redux"

const FoodBranch = (props) => {
    // useEffect(async() => {
    //     dispatch(getData())
    // }, [])

    // const dispatch = useDispatch()
    // const data = useSelector(state => state.data.data)
    // console.log(data) 

        return (
            <Box className="allProduct_shop">
              
            </Box>
           
        )
};

export default FoodBranch;
