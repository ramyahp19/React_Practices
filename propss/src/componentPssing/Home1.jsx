import React, { Component } from 'react'

export default class Home1 extends Component {
  render(props) {
    console.log(this.props);
    
    return (
      <div>
       {
        this.props.max.props.jio.props.lio.products.map((magic)=>{
            console.log(magic);
            

        })
       }
      </div>
    )
  }
}