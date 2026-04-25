import React, { Fragment } from 'react'

const Home2 = (props) => {
  return (
    <div>
      {
        props.max.products.map((data) => {
          return <Fragment>
            <img src={data.images[0]} alt="" style={{ width: "150px", height: "150px" }} />
            <button>Add to cart</button>
          </Fragment>;
        })

      }
     
    </div>
  )
}

export default Home2