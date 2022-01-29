import React from 'react';
import { useParams } from 'react-router-dom';

const CardProduct = (props) => {
  //using props to get data
  const { title } = useParams()
    console.log(title)
    return (
      <div>
         {
          props.data.filter(e => e.title == title).map(k=> (
            <p>
              This is { k.title}
            </p>
          ))
        }
      </div>
  )
};

export default CardProduct
