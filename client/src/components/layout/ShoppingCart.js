import React, { Fragment } from "react";

function ShoppingCart() {
  return (
    <Fragment>
      <div id="shoping-card" className="slide-back-cart">
        <h3>Shoping Cart</h3>
        <ul className="shopping-card-container"></ul>
        <div id="total">
          <span>Total cost: </span>
          <span className="fl-r">$</span>
          <span id="totalCost" className="fl-r">
            0
          </span>
          <button className="buy-now btn">BUY NOW!</button>
        </div>
      </div>
    </Fragment>
  );
}

export default ShoppingCart;
