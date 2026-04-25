import React, { useEffect, useMemo, useState } from 'react'

const App = () => {
  let [state, setState] = useState(0)

  let handleClick = () => {
    setState(state + 1)
  }
  //  useEffect(() => {    //last
  //    alert(`hiiii ${state}`)
  //     document.title = `hiiii ${state}`
  //  },[state>6])//componetwillDie works only once and update also works only once 
  // it will get executed only once when the state >6 that means only once when state becomes 7 after it wont work
  

// useEffect(() => {
//     alert(`hiiii ${state}`)
//      document.title = `hiiii ${state}`
//   },[])   //it works like component Mount
 

useMemo(()=>{
alert(`hii ${state}`)
document.title=`hiii ${state}`
}) /// first

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
  

}

export default App
// Your code has a logic error because the useEffect hook is written after the return statement.
//  In React, any code written after return will never execute.
//Once return runs, the component stops executing, so useEffect will never run.