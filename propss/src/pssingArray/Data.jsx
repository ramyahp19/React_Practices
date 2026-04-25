import React, { Component } from 'react'
import Product from "./Product"

export default class Data extends Component {
  render() {
    console.log(this.props)

    return (
      <div>
        <Product jio={this.props.rio}></Product>
      </div>
    )
  }
}