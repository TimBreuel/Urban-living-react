import React, { Fragment } from "react";

function ShoppingCart() {
  return (
    <Fragment>
      <div id="shoping-card" class="slide-back-cart">
        <h3>Shoping Cart</h3>
        <ul class="shopping-card-container"></ul>
        <div id="total">
          <span>Total cost: </span>
          <span class="fl-r">$</span>
          <span id="totalCost" class="fl-r">
            0
          </span>
          <button class="buy-now btn">BUY NOW!</button>
        </div>
      </div>
    </Fragment>
  );
}

export default ShoppingCart;
