import React, { Component } from 'react'
import JSON from "./items.json"
import Datass from "./Datass"

export default class Apps extends Component {
  render() {
    return (
      <div>
        <Datass max={JSON}></Datass>
      </div>
    )
  }
}