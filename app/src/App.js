import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/body/home/Home';
import { getData } from "./features/data/dataSlice";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);
  console.log(data)
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>,
    </div>
  );
} 

export default App;
