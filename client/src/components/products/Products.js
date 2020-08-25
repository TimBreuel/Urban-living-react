import React, { Fragment, useContext, useEffect } from "react";
import Headline from "./Headline";
import ProductsContext from "../../context/products/ProductsContext";
import ProductItems from "./ProductItems";

function Products(props) {
  const productsContext = useContext(ProductsContext);
  const { products, getAllProducts } = productsContext;

  useEffect(() => {
    getAllProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Headline txt="Our Products"></Headline>
      <ProductItems products={products}></ProductItems>
    </Fragment>
  );
}

export default Products;
