import React, { Component } from 'react'
import Views from "./Views"

export default class Datas extends Component {
  render(props) {
    return (
      <div>
        <Views maxx={this.props.max}></Views>
      </div>
    )
  }
}