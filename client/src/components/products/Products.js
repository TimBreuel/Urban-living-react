import React, { Fragment, useContext, useEffect } from "react";
import Headline from "./Headline";
import ProductsContext from "../../context/products/ProductsContext";
import ProductItems from "./ProductItems";
import AuthContext from "../../context/auth/AuthContext";

function Products({ headline }) {
  const productsContext = useContext(ProductsContext);
  const { products, getAllProducts, filtered, setLoading } = productsContext;
  const authContext = useContext(AuthContext);
  const { checkLocalStorageAndLogin } = authContext;

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
