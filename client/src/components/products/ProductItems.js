import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProductItem from "./ProductItem";

function ProductItems({ products }) {
  console.log("ITEMS:", products);
  return (
    <Fragment>
      <TransitionGroup className="container container-flex slide-back slide-back-cart">
        {products.map((product) => {
          return (
            <CSSTransition key={product._id} timeout={500} classNames="item">
              <ProductItem product={product}></ProductItem>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Fragment>
  );
}

export default ProductItems;
