import React, { Fragment, useContext, useEffect } from "react";
import ProductsContext from "../../context/products/ProductsContext";
import ShoppingCartItem from "./ShoppingCartItem";
function ShoppingCart() {
  const productsContext = useContext(ProductsContext);
  const { shoppingCart, getAllArticelsForCart } = productsContext;
  useEffect(() => {
    getAllArticelsForCart();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div id="shoping-card" className="slide-back-cart">
        <h3>Shoping Cart</h3>
        <ul className="shopping-card-container">
          {shoppingCart !== null && shoppingCart.length !== 0
            ? shoppingCart.map((product) => {
                return (
                  <ShoppingCartItem
                    product={product}
                    key={product._id}
                  ></ShoppingCartItem>
                );
              })
            : null}
        </ul>
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
