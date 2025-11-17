import React from 'react'
//import phone from '../assets/iphone.png'

const Products = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="iphone" />
        <h3>{props.name}</h3>    
        <p>{props.price}</p>  
    </div>
  )
}

export default Products
