import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Data = () => {
  let [state, setState] = useState({
    trainer: "",
    subject: ""
  })

  let navigate = useNavigate()

  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:5000/data", state)
      navigate("/printData")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Data</h2>

      <input
        type="text"
        name="trainer"
        placeholder="Trainer Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Data