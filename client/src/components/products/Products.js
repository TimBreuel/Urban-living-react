import React, { Fragment, useContext, useEffect } from "react";
import Headline from "./Headline";
import ProductsContext from "../../context/products/ProductsContext";
import ProductItems from "./ProductItems";
import AuthContext from "../../context/auth/AuthContext";

function Products({ headline }) {
  //////////////////////
  //USE PRODUCT CONTEXT
  const productsContext = useContext(ProductsContext);
  const { products, getAllProducts, filtered, setLoading } = productsContext;
  ///////////////////
  //USE AUTH CONTEXT
  const authContext = useContext(AuthContext);
  const { checkLocalStorageAndLogin } = authContext;

  //USE EFFECT ONLY ONE TIME // GET ALL PRODUCTS // CHECK LOCAL STORAGE
  useEffect(() => {
    getAllProducts();
    setLoading(true);
    checkLocalStorageAndLogin();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Headline txt="Our Products"></Headline>
      {filtered !== null ? (
        <ProductItems products={filtered}></ProductItems>
      ) : (
        <ProductItems products={products}></ProductItems>
      )}
    </Fragment>
  );
}

export default Products;
