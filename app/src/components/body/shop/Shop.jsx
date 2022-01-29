import React from 'react';
import { Box } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//

import Allproduct from './Allproduct';

const Shop = () => {
    return (
      <Box>
        <Router>
            <Routes>
                <Route path="/all-product" element={<Allproduct />} />
            </Routes>
        </Router>
      </Box>
  )
};

export default Shop;
