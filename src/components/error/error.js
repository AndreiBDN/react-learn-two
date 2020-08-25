import React from 'react'
import img from './error.jpg'

const ErrMessage = () => {
    return(
       <>
       <img src={img} alt="Error"></img>
       <span>Something happened</span>
       </>
    )
}
export default ErrMessage;