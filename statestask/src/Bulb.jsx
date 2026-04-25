// import React, { Component } from "react";
//  import OFF from "./assests/bulboff.jpg";
//  import ON from"./assests/bulbon.jpg";

//  export default class Bulb extends Component {
//          constructor(){
//             super();
//              this.state = {
//                 bulb : OFF
                
//              }
//         }      
//      turnOn = () => {
//        this.setState({
//             bulb : ON,
//        })
//     }
//      turnOff = () => {
//          this.setState({
//              bulb : OFF,
//          })
//     }
//    render() {
//      return (
//        <div>
//           <img height={200}  
//            src={this.state.bulb} alt="bulb" className="bulb"/>
//          <button onClick={this.turnOn}>ON</button>
//          <button onClick={this.turnOff}>OFF</button>
//       </div>
//      )
//    }
//  }