import React from 'react';
const CardProduct = (props) => {
  
  if (props.data.length == 0)
        return (
            <p>Loading...........</p>
        )
  else    
      console.log(props.data.data[0].images[0].imageUrl)
      return (
          <div>
            
          </div>
      )
          
    return (
      <div>
        
      </div>
  )
};

export default CardProduct
