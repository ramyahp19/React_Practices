import React from 'react'
import Hoc from './Hoc'

const Product = (props) => {
  return (
    <div>
        <h1>{props.lio.name}</h1>
        <h1>hiii</h1>
        
    </div>
  )
}

export default Hoc(Product)