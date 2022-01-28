import React, { useEffect,useState } from 'react';
import Home from './components/body/home/Home';

function App() {
  const [data, setdata] = useState({})

  useEffect(() => {
    fetch("./data.json").then((res) => {
      return res.json()
    })
    .then(res => {
      setdata(res)
      console.log(data)
    })
    .catch((err)=>console.log(err))
  })

  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
