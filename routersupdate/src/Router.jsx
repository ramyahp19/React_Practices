import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Home'
import Data from './Data'
import PrintData from './PrintData'
import EditData from './EditData'


let router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/data",
        element:<Data></Data>
      },
      {
        path:"/printData",
        element:<PrintData></PrintData>
      },
      {
        path:"/edit",
        element:<EditData></EditData>

      }
      // {
      //   path:"/delete",
      //   element:<Delete></Delete>
        
      // }

    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App