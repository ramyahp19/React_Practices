import React, { Component } from "react";
import First from "./pasta.jpg"
import Second from "./pizza.jpg"
import Third from "./fries.jpg"
import Fourth from "./burger.jpg"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      dishes: [
        {
          name: "Pasta",
          img: First
        },
        {
          name: "Pizza",
          img: Second
        },
        {
          name: "fries",
          img: Third
        },
        {
          name: "Burger",
          img: Fourth
        }
      ]
    };
  }

handleNext = () => {
  if(this.state.index < this.state.dishes.length - 1){
    this.setState({
      index: this.state.index + 1
    })
  }
};

handlePrev = () => {
  if(this.state.index > 0){
    this.setState({
      index: this.state.index - 1
    })
  }
};

  render() {
    const { dishes, index } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        
        <button onClick={this.handlePrev}>{"<"}</button>

        <div style={{ display: "inline-block", margin: "0 20px" }}>
          <img
            src={dishes[index].img}
            alt={dishes[index].name}
            width="200"
            height="200"
          />
          <h3>{dishes[index].name}</h3>
        </div>

        <button onClick={this.handleNext}>{">"}</button>

      </div>
    );
  }
}