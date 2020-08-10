import React, { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import axios from "axios";
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
      const res = await axios.get("/products");
      console.log(res);
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log(error);
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
