import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Data = () => {
    let [state,setState]=useState({
        trainer:"",
        subject:""
    })

    let navigate=useNavigate()

    let {trainer,subject}=state

    let handleChange=(e)=>{

       let {name,value}=e.target

       setState({...state,[name]:value})

    }

    let handleSubmit=async()=>{

        
        try{
            let payload={trainer,subject}

            navigate("/printData")
            

        await axios.post("http://localhost:3000/data",payload)

        }catch(err){
            console.log(err);
            

        }

    }

  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">TRAINER NAME:</label>
        <input type="text" name="trainer" id="" onChange={handleChange} />

        <label htmlFor="">SUBJECT:</label>
        <input type="text" name="subject" id="" onChange={handleChange} />

        <input type="submit" value="SUBMIT" />
       </form>
    </div>
  )
}

export default Data
