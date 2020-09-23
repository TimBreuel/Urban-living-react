import React, { Fragment, useContext } from "react";
import ProductsContext from "../../context/products/ProductsContext";
function ShoppingCardBtn() {
  //////////////////////
  //USE PRODUCT CONTEXT
  const productsContext = useContext(ProductsContext);
  const {
    shoppingCartSlideToggleFn,
    shoppingCartSlideToggle,
  } = productsContext;

  ///////////////////////////
  //SHOPPING CARD SLIDE BACK
  const ShoppingCardSlide = () => {
    if (shoppingCartSlideToggle) {
      shoppingCartSlideToggleFn(false);
    } else {
      shoppingCartSlideToggleFn(true);
    }
  };
  return (
    <Fragment>
      <div
        id="shoppingCart"
        className="slide-back-cart"
        onClick={ShoppingCardSlide}
      >
        <i className="fas fa-shopping-cart slide-back-cart"></i>
      </div>
    </Fragment>
  );
}

export default ShoppingCardBtn;
