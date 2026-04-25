import React, { Component } from 'react'
import Cart from "./Cart"

export default class Product extends Component {
  render() {
    return (
      <div>
        <Cart jio={this.props.jio} />
      </div>
    )
  }
}