import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditData = () => {

  let { id } = useParams()
  let navigate = useNavigate()

  let [state, setState] = useState({
    trainer: "",
    subject: ""
  })

  let handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  useEffect(() => {
    let fetchOne = async () => {
      let res = await axios.get(`http://localhost:5000/data/${id}`)
      setState(res.data)
    }
    fetchOne()
  }, [id])

  let handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`http://localhost:5000/data/${id}`, state)
      navigate("/printData")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Data</h2>

      <input
        type="text"
        name="trainer"
        value={state.trainer}
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        value={state.subject}
        onChange={handleChange}
      />

      <button type="submit">Update</button>
    </form>
  )
}

export default EditData