import React, { useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import IsLoading from '../isLoading/IsLoading';

const Home = () => {
  const [dataList, setDataList] = useState([])
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then(res => {
        setDataList((Object.keys(res)))
      })
  })

  return (
    <Box>
      {
        dataList.length != 0 ? dataList.map(
          (e) => (
            <div>
                <a href={`shop/${e}`}>{e}</a>
                <br></br>
            </div>
          )
        ):<></>
      }
    </Box>
    )
};

export default Home;
