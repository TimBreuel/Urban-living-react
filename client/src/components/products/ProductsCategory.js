import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Headline from "./Headline";
import ProductsContext from "../../context/products/ProductsContext";
import ProductItem from "./ProductItem";

function ProductsCategory(props) {
  const productsContext = useContext(ProductsContext);
  const { products, getProductsCategory } = productsContext;
  console.log(getProductsCategory);
  useEffect(() => {
    getProductsCategory(props.chairs);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Headline txt={props.headline}></Headline>
      <TransitionGroup
        className="container container-flex slide-back slide-back-cart"
        id="product-container"
      >
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

export default ProductsCategory;
