import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import {
    Link
} from "react-router-dom";

const Shop = (props) => {
    // console.log(props.data)
    if (props.data.length == 0)
        return (
            <p>Loading...........</p>
        )
    else    
        // console.log(props.data.data[0].images[0].imageUrl)
        return (
            <Box className="allProduct_shop">
                {
                    props.data.data.map((e,index) => (
                        <Link to={`/shop/${e.foodId}`} key={index}>
                            <Card className="product">
                                <CardMedia component="img" image={e.images[0].imageUrl} /> {/* Insert image into component */}
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
                }
            </Box>
           
        )
};

export default Shop;
