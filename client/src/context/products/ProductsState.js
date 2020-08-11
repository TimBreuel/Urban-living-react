import React, { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import { GET_PRODUCTS } from "../types";

const ProductsState = (props) => {
  const initalState = {
    products: [],
  };
  const [state, dispatch] = useReducer(ProductsReducer, initalState);

  ///////////////////
  //GET ALL PRODUCTS
  const getAllProducts = async () => {
    try {
      const res = await fetch("/products");
      const data = await res.json();
      console.log("After fetch:", data);
      dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
      console.log("Catch err:", error.message);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getAllProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
