import React from 'react';
import { Box } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
//

import Allproduct from './Allproduct';

const Shop = () => {
//     const { data } = useSelector((state) => state.data);
//   console.log(data)
    return (
      <Box>
        <Routes>
            <Route path="/allproduct" element={<Allproduct />} />
        </Routes>
      </Box>
  )
};

export default Shop;
