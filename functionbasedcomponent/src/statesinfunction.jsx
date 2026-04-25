import React from 'react'
import { useState } from 'react';

const Increment = () => {
    let [count, setCount] = useState(0);
    let handleclick = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleclick}>click</button>
    </div>
  )
}

export default Increment;