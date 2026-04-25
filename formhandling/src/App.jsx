import React, { useState } from "react"
import axios from "axios"

const App = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  
  const validate = () => {
    let err = {}

    // Name validation (only alphabets)
    if (!form.name) {
      err.name = "Name is required"
    } else if (!/^[A-Za-z]+$/.test(form.name)) {
      err.name = "Only alphabets allowed"
    }

    // Email validation
    if (!form.email) {
      err.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email"
    }

    // Password validation
    if (!form.password) {
      err.password = "Password is required"
    } else if (form.password.length < 8) {
      err.password = "Minimum 8 characters required"
    }

    setErrors(err)
    return Object.keys(err).length === 0
  }

  //  Submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    try {
      const res = await axios.post("http://localhost:5002/user", form)
      console.log(res.data)
      alert("Form submitted successfully ")
    } catch (err) {
      console.log(err)
      alert("Server error ")
    }
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label><br />
        <input type="text" name="name" onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.name}</p>

        <label>Email:</label><br />
        <input type="text" name="email" onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.email}</p>

        <label>Password:</label><br />
        <input type="password" name="password" onChange={handleChange} />
        <p style={{ color: "red" }}>{errors.password}</p>

        <br />
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default App 