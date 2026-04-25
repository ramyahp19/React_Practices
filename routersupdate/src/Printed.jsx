import React from 'react'
import { Link } from 'react-router-dom'

const Printed = ({ id, trainer, subject }) => {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{trainer}</h3>
      <p>{subject}</p>

      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  )
}

export default Printed