import React from 'react'

const PrintIMage = (props) => {
    console.log(props);
    let {thumbnailUrl,title}=props.lio
    
  return (
    <div>
        <div onClick={()=>{props.fun(props.lio)}}>
            <img  height={100} width={100} src={thumbnailUrl} alt="" />
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default PrintIMage