import React from 'react'

const VideoPlayer = ({max})=> {
  return (
    <div>
        
        <video height={200} width={300} controls autoPlay muted src={max}></video>
    </div>
  )
}

export default VideoPlayer