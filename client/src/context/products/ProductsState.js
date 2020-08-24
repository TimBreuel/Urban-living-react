import React, { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import { GET_PRODUCTS } from "../types";
import axios from "axios";

const ProductsState = (props) => {
  const initalState = {
    products: [],
  };
  const [state, dispatch] = useReducer(ProductsReducer, initalState);

  ///////////////////
  //GET ALL PRODUCTS
  const getAllProducts = async () => {
    // let config = {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    // };
    try {
      const res = await axios.get("http://localhost:5000/products");

      // console.log("After fetch:", res.data);
      // console.log(res);
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log("Catch err:", error);
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
