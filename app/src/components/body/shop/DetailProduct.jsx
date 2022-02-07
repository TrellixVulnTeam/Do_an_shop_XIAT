import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import {
    useParams
} from "react-router-dom";
import axios from "axios"
import { getData } from '../../../features/dataSlice';
import { useDispatch, useSelector } from "react-redux"
//For sort product

const DetailProduct = (allData) => {
    console.log(allData)
        return (
            <Box className="allProduct_shop">
              
            </Box>
           
        )
};

export default DetailProduct;
