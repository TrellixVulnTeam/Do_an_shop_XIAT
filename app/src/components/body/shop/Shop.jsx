import React from 'react';
import {
    Link
} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Shop = (props) => {
    return (
        props.data.map((e, index) => (
            <Link to={`/shop/${e.title}`}>
                <Card key={index}>
                  <CardMedia />//Insert image into component
                  <CardContent>
                    <Typography variant="p">/// p h4 ...
                        {e.title}
                    </Typography>
                    <Typography variant="p">
                        {e.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
            </Link>
    ))
  )
};

export default Shop;
