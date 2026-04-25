import React, { Component } from 'react'
import Data from "./Data"

export default class Homee extends Component {
  render() {
    console.log(this.props)

    return (
      <div>
        <Data rio={this.props.leo} />
      </div>
    )
  }
}