import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";

import Home from './components/body/home/Home';
import Shop from './components/body/shop/Shop'
import CardProduct from './components/body/shop/CardProduct'

import { getData } from "./features/dataSlice";


// const data = [
//   {title:"html",description:"This is html"},
//   {title:"php",description:"This is php"},
//   {title:"java",description:"This is java"},
//   {title:"typescript",description:"This is typescript"}
// ]

//Using data.json()
function App() {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.data)
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  
  return (
    <div className="App">
      <Router>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop data={data}/>} />
          {/* <Route path="/shop/:title" element={<CardProduct data={data}/>} /> */}
        </Routes>
      </Router>
    </div>
  );
} 

export default App;
