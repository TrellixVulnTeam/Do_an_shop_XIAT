import React, { useEffect} from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import {
    Link,
    Route,
    Routes,
    useParams
} from "react-router-dom";
import IsLoading from '../isLoading/IsLoading';
import FoodBranch from './FoodBranch';
import { getData } from '../../../features/dataSlice';
import { useDispatch, useSelector } from "react-redux"
const Shop = () => {
        return (
            <Box className="allProduct_shop">
                {/* {
                    data.pizza.map((e,index) => (
                        <Link to={`/shop/${e.foodId}`} key={index}>
                            <Card className="product">
                                <CardMedia component="img" image={e.images[0].imageUrl} />
                                <CardContent>
                                    <Typography variant="p">
                                        {e.price} Đ
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                <Typography variant="p">
                                        {e.foodName}
                                    </Typography>
                                </CardContent>
                                <Button className="button">
                                    Order now
                                </Button>
                            </Card>
                        </Link>
                    ))
                } */}
            </Box>
           
        )
};

export default Shop;
