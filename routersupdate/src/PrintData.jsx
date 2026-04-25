import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Printed from './Printed'
import { PacmanLoader } from "react-spinners"

const PrintData = () => {
  let [data, setData] = useState(null)

  let fetchData = async () => {
    let res = await axios.get("http://localhost:5000/data")
    setData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>All Data</h2>

      {
        data === null
          ? <PacmanLoader />
          : data.map(item => (
              <Printed key={item.id} {...item} />
            ))
      }
    </div>
  )
}

export default PrintData