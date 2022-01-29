import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/body/home/Home';
import { getData } from "./features/dataSlice";
import Shop from './components/body/shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop/:Id/*" element={<Shop />} />
        </Routes>
      </Router>,
    </div>
  );
} 

export default App;
