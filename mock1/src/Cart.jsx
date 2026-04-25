import React from "react";

function Cart(props) {

  return (
    <div className="box">

      <h2 className="home">Cart</h2>

      {props.book > 0 && (
        <div className="row">
          <p>Book A</p>

          <div>
            <button onClick={props.decBook}>-</button>
            <span>{props.book}</span>
            <button onClick={props.incBook}>+</button>
          </div>
        </div>
      )}

      {props.phone > 0 && (
        <div className="row">
          <p>Phone B</p>

          <div>
            <button onClick={props.decPhone}>-</button>
            <span>{props.phone}</span>
            <button onClick={props.incPhone}>+</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Cart;