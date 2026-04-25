import React, { Component } from 'react'

export default class Product1 extends Component {
  render(props) {
    console.log(this.props);
    
    return (
      <div>
        {
          this.props.max.props.jio.props.leo.JSONS.Products.map((magic) => {
            return <img src={magic.images[0]} alt="" />
          })
        }
      </div>
    )
  }
}