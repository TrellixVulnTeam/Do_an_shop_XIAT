import React, { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/body/home/Home';
import Shop from './components/body/shop/Shop'
import CardProduct from './components/body/shop/CardProduct'
import Footer from "./components/footer/Footer"
import { getData } from "./features/dataSlice";
import FoodBranch from "./components/body/shop/FoodBranch";
import Login from "./components/body/helper/login/Login"

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(getData())
  },[dispatch])

  return (
    <div className="App">
      <Router>  
        <Routes>
          <Route exact path="shop" element={<Shop data={data} />} ></Route>
          <Route path="/shop/:slug" element={<FoodBranch />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
          {/* <Footer /> */}
      </Router>
    </div>
  );
} 

export default App;
