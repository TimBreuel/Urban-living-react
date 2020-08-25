import React, { Fragment, useContext, useEffect } from "react";
import Headline from "./Headline";
import ProductsContext from "../../context/products/ProductsContext";
import ProductItems from "./ProductItems";

function ProductsCategory(props) {
  const { category } = props;
  const productsContext = useContext(ProductsContext);
  const { products, getProductsCategory } = productsContext;

  useEffect(() => {
    getProductsCategory(category);
    //eslint-disable-next-line
  }, []);
  console.log("INSIDE:", products);
  return (
    <Fragment>
      <Headline txt="Chairs"></Headline>
      <ProductItems products={products}></ProductItems>
    </Fragment>
  );
}

export default ProductsCategory;
