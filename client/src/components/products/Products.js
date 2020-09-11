import React, { Fragment, useContext, useEffect } from "react";
import Headline from "./Headline";
import ProductsContext from "../../context/products/ProductsContext";
import ProductItems from "./ProductItems";
import AuthContext from "../../context/auth/AuthContext";

function Products({ headline }) {
  const productsContext = useContext(ProductsContext);
  const {
    products,
    getAllProducts,
    filtered,
    setLoading,
    getAllArticelsForCart,
  } = productsContext;
  const authContext = useContext(AuthContext);
  const { checkLocalStorageAndLogin, user } = authContext;

  useEffect(() => {
    getAllProducts();
    setLoading(true);
    checkLocalStorageAndLogin();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    getAllArticelsForCart(user);
  }, [user]);
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
