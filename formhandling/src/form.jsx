import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const App = () => {
  let [state,setState]=useState({
    user:"",
    password:"",
    gender:"",
    quali:""
  })

  let{user,password,gender,quali} = state
  let handleChange=(e)=>{
    let {name,value}=e.target
    setState({...state,[name]:value})
  }
  let handleSubmit=async()=>{
    try{
      let payload={user,password,gender,quali}
      await Axios.post("http://localhost:3001/user",payload)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlfor=""> USER NMAE:</label>
        <input type="text" name='user' id="" onChange={handleChange} />

        <label htmlfor=""> PASSWORD:</label>
        <input type="password" name='password' id="" onChange={handleChange} />

        <label htmlfor="">GENDER:</label>
        MALE<input type="radio" value="male" name="gender" onChange={handleChange}  id="" />
        FEMALE<input type="radio" value="female" name="gender" onChange={handleChange}  id="" />

        <label htmlfor="">QUALIFICATION:</label>
        <select name="quali" id="" onChange={handleChange}>
          <option value="">SELECT</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="graduation">GRADUATION</option>
        </select>

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}

export default App