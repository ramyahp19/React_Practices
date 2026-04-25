import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './CRUD/Home'
import Data from './CRUD/Data'
import PrintData from './CRUD/PrintData'


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
      }
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