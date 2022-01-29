import React, { useEffect } from 'react';
import Home from './components/body/home/Home';
import Shop from './components/body/shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>,
    </div>
  );
} 

export default App;
