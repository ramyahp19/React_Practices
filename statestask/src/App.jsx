// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super()
//     this.state = {
//       count:0
//     }
//   }

//   handleIncrement = () => {

//     this.setState((prev)=>{
//       const newCount = prev.count + 1

//       if(newCount === 5){
//         document.body.style.backgroundColor = "red"
//       }
//       else if(newCount === 10){
//         document.body.style.backgroundColor = "yellow"
//       }
//       else if(newCount === 15){
//         document.body.style.backgroundColor = "blue"
//       }

//       return {count:newCount}
//     })

//   }

//   handledecrement = () => {

//     this.setState((prev)=>{
//       const newCount = prev.count - 1

//       if(newCount === 5){
//         document.body.style.backgroundColor = "red"
//       }
//       else if(newCount === 10){
//         document.body.style.backgroundColor = "yellow"
//       }
//       else if(newCount === 15){
//         document.body.style.backgroundColor = "blue"
//       }

//       return {count:newCount}
//     })

//   }

//   render() {
//     return (
//       <div id="nav">
//         <h1>{this.state.count}</h1>

//        <div> <button onClick={this.handleIncrement}>Increment</button></div>
//         <div><button onClick={this.handledecrement}>Decrement</button>
// </div>
//       </div>
//     )
//   }
// }


