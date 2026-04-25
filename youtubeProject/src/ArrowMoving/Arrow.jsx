import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Arrow = () => {
    let handleClick=()=>{
   alert("huuu")
    }
  return (
    <div>
       <h1 id="arrow"><FaArrowRight /></h1>
        <div id="max" onClick={handleClick}></div>
    </div>
  )
}

export default Arrow