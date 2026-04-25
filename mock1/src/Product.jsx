import React from "react";

function Products(props) {

  return (
    <div className="box">

      <h2 className="home">Products</h2>

      <div className="row">
        <p>Book A</p>
        <button onClick={props.addBook}>Add to Cart</button>
      </div>

      <div className="row">
        <p>Phone B</p>
        <button onClick={props.addPhone}>Add to Cart</button>
      </div>

    </div>
  );
}

export default Products;