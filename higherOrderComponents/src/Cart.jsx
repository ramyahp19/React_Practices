import React from 'react'
import Hoc from './Hoc'
import Product from "./Product"
const Cart = (props) => {
  return (
    <div>
        <h1>{props.lio.name}</h1>
        <Product></Product>
    </div>
  )
}

export default Hoc(Cart)