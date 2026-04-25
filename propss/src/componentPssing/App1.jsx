import React, { Component } from 'react'
import Home1 from "./Home1"
import JSONS from "./items.json"
import Data1 from "./Data1"
import Product1 from "./Product1"

export default class App1 extends Component {
  render() {
    return (
      <div>
        <Home1 
           max={
            <Data1 
              jio={<Product1 lio={JSONS}></Product1>} >
            </Data1>
          } >

        </Home1>
      </div>
    )
  }
}
