import React, { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import { GET_PRODUCTS, GET_PRODUCTS_CATEGORY, SET_DETAILS } from "../types";
import axios from "axios";

const ProductsState = (props) => {
  const initalState = {
    products: [],
    details: false,
  };
  const [state, dispatch] = useReducer(ProductsReducer, initalState);

  ///////////////////
  //GET ALL PRODUCTS
  const getAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log("Catch err:", error);
    }
  };

  ////////////////////////
  //GET CATEGORY PRODUCTS
  const getProductsCategory = async (category) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/products/category",
        { category: category },
        config
      );
      // console.log("REACT RES:", res.data);
      dispatch({ type: GET_PRODUCTS_CATEGORY, payload: res.Data });
    } catch (error) {}
  };

  /////////////////////////
  //SET AND REMOVE DETAILS
  const seeDetails = (boolean) => {
    dispatch({ type: SET_DETAILS, payload: boolean });
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        details: state.details,
        getAllProducts,
        getProductsCategory,
        seeDetails,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
