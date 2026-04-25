
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Printed from './Printed'
import {PacmanLoader} from "react-spinners"

const PrintData = () => {
    let [state,setState]=useState(null)

    let max=async()=>{

        let {data}=await axios.get("http://localhost:3000/data")
        setState(data)

        

    }


    useEffect(()=>{

        max()

    })

  return (
    <div>
        <h1>DATA PAGE</h1>
      {
        state == null ? (<PacmanLoader></PacmanLoader>) : (state.map((magic)=>{

            return <Printed {...magic}></Printed>
            

        }))
      }
    </div>
  )
}

export default PrintData
