import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './Home'
import Data from './Data'
import PrintData from './PrintData'
import EditData from './EditData'

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/data",
        element: <Data />
      },
      {
        path: "/printData",
        element: <PrintData />
      },
      {
        path: "/edit/:id",
        element: <EditData />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App