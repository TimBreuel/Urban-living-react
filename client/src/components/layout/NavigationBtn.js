import React, { Fragment, useContext } from "react";
import ProductsContext from "../../context/products/ProductsContext";
function NavigationBtn() {
  //////////////////////
  //USE PRODUCT CONTEXT
  const productsContext = useContext(ProductsContext);
  const { menuSlideToggle, menuSlideToggleFn } = productsContext;

  ////////////////////
  //SLIDE MENU TOGGLE
  const slideMenu = () => {
    if (menuSlideToggle) {
      menuSlideToggleFn(false);
    } else {
      menuSlideToggleFn(true);
    }
  };
  return (
    <Fragment>
      <div id="navMenu" className="slide-back" onClick={slideMenu}>
        <i className="fas fa-bars slide-back"></i>
      </div>
    </Fragment>
  );
}

export default NavigationBtn;
