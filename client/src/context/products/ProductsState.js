import React, { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import {
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_CART,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
} from "../types";
import axios from "axios";

const ProductsState = (props) => {
  const initalState = {
    products: [],
    shoppingCart: [],
    filtered: null,
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

  ////////////////////
  //FILTERED PRODUCTS
  const filteredProducts = (text) => {
    console.log("PAYLOAD TXT:", text);
    dispatch({ type: FILTER_PRODUCTS, payload: text });
  };

  ///////////////
  //CLEAR FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  /////////////////////////////
  //GET ALL ARTICELS FROM CART
  const getAllArticelsForCart = () => {};

  ////////////////////////
  //ADD A ARTICEL TO CART
  const addArticelToCart = () => {};

  //////////////////////////////
  //REMOVE AN ARTICLE FROM CART
  const removeArticelFromCart = () => {};
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        details: state.details,
        filtered: state.filtered,
        getAllProducts,
        filteredProducts,
        clearFilter,
        getAllArticelsForCart,
        addArticelToCart,
        removeArticelFromCart,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
