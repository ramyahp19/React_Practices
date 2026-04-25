import React, { Component, Fragment } from 'react'

export default class Views extends Component {
  render(props) {
    return (
      <div>
        {
          this.props.maxx.products.map((magic) => {
            return (
              <Fragment>
                <img  height={150} width={150} src={magic.images[0]} alt="" />
                <button>Add to cart</button>
              </Fragment>
            )
          })
        }
      </div>
    )
  }
}