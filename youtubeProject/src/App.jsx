// import React, { useState } from 'react'
// import VIDEO from "./youtube/video.json"
// import Container from "./youtube/Containers"

// const App = () => {
//   let [state,setState] =useState (VIDEO)
//   let [vid,setVid]=useState(null)
//   let handlePlay=(magic)=>{
//     console.log(magic);
//     setVid(magic.videoUrl)
    
//   }
//   return (
//     <div>
//       <Container fun={handlePlay} dinga={state} dingi={vid}></Container>
//     </div>
//   )
// }

// export default App


//-----------------------------
import React from 'react'
import Arrow from './ArrowMoving/Arrow'


const App = () => {
  return (
    <div>
      <Arrow></Arrow>
    </div>
  )
}

export default App