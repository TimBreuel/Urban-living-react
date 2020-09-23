import React, { Fragment, useContext, useEffect } from "react";
import ProductsContext from "../../context/products/ProductsContext";
import ShoppingCartItem from "./ShoppingCartItem";
import AuthContext from "../../context/auth/AuthContext";

function ShoppingCart() {
  //////////////////////
  //USE PRODUCT CONTEXT
  const productsContext = useContext(ProductsContext);
  const {
    shoppingCart,
    getAllArticelsForCart,
    shoppingCartSlideToggle,
    totalCost,
  } = productsContext;

  ///////////////////
  //USE AUTH CONTEXT
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  ///////////////////////////////////////////////////////
  //USE EFFECT GET ALL ARTICALS FOR USER IF STATE CHANGE
  useEffect(() => {
    getAllArticelsForCart(user);
    //eslint-disable-next-line
  }, [user]);
  return (
    <Fragment>
      <div
        id="shoping-card"
        className={
          shoppingCartSlideToggle
            ? "slide-back-cart show"
            : "slide-back-cart hide"
        }
      >
        <h3>Shoping Cart</h3>
        <ul className="shopping-card-container">
          {shoppingCart !== null && shoppingCart.length > 0
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
          <span className="fl-r"> $</span>
          <span id="totalCost" className="fl-r">
            {totalCost ? totalCost : 0}
          </span>
          <button className="buy-now btn">BUY NOW!</button>
        </div>
      </div>
    </Fragment>
  );
}

export default ShoppingCart;
