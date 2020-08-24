import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Headline from "./Headline";
import ProductsContext from "../../context/products/ProductsContext";
import ProductItem from "./ProductItem";

function Products() {
  const productsContext = useContext(ProductsContext);
  const { products, getAllProducts } = productsContext;
  console.log(productsContext);
  useEffect(() => {
    getAllProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Headline txt="Our Products"></Headline>
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

export default Products;
