import React from 'react'

const ComC = ({arr}) => {
  return (
    <div>
      <h1>ComC</h1>

      {
        arr.map((ele, index)=>{
            return(
                <div>
                    <p key={index}>{ele}</p>
                </div>    

            )
        })
      }


    </div>
  )
}

export default ComC
