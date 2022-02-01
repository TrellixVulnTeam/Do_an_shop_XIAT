import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import IsLoading from '../isLoading/IsLoading';

const Home = (props) => {
  if (props.data.length == 0)
    return (<IsLoading />)
  return (
    <Box>
      {
        props.data.listFood.map(e =>
          <Link to={`/shop/${e}`}>
              {e}
          </Link>
          )
      }
    </Box>
    )
};

export default Home;
