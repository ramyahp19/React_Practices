import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">HOME PAGE</Link>
            </li>

             <li>
                <Link to="/data">DATA  PAGE</Link>
            </li>

            <li>
                <Link to="/printData">DETAILS PAGE</Link>
            </li>

        </ul>

        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Home
