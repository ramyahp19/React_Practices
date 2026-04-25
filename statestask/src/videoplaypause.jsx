import React, { Component } from 'react'
import VIDEO from "./images/videoplayback.mp4"

export default class App extends Component {
  constructor(){
    super()

    this.state={
      vid:true
    }

  }

  handlePlay=()=>{

    this.max=document.getElementById("max")

    this.setState({vid:!this.state.vid})

    if(this.state.vid == true){
      this.max.play()
    }else{
      this.max.pause()
    }

  }

  render() {
    return (
      <div>
        <video id='max' height={200} width={300} src={VIDEO}></video>
        <button onClick={this.handlePlay}>{this.state.vid ? "PLAY" : "PAUSE"}</button>
      </div>
    )
  }
}