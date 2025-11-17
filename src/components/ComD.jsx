import React from 'react'

const ComD = ({arrObj}) => {
  return (
    <>
        <h1>ComD</h1>
        {
            arrObj.map((ele, index)=>{
                return(
                    <div key={index} className='card'>
                        <img src={ele.img} alt={ele.name} />
                        <h3>{ele.name}</h3>    
                        <p>{ele.price}</p>  
                    </div>
                )
            })
        }
    </>
  )
}

export default ComD
