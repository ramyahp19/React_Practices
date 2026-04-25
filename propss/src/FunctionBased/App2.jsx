import React from 'react'
import Home2 from "./Home2"
import JSONS2 from "./items.json"

export const App2 = () => {
  return (
    <div>
      <Home2 max={JSONS2}></Home2>
    </div>
  )
}
export default App2