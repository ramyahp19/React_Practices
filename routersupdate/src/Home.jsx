import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>React CRUD App</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/data">Add Data</Link></li>
        <li><Link to="/printData">View Data</Link></li>
      </ul>

      <hr />

      <Outlet />
    </div>
  )
}

export default Home