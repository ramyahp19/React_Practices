import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    console.log(this.props)

    return (
      <div>
        {
          this.props.jio.map((data) => {
            return <h1>{data}</h1>
          })
        }
      </div>
    )
  }
}