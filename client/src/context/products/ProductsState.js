import React, { useReducer, useContext } from "react";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";
import { toast } from "react-toastify";
import {
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_CART,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  MENU_SLIDE_TOGGLE,
  SHOPPING_CART_TOGGLE,
  SET_LOADING,
} from "../types";
import axios from "axios";
import AuthContext from "../auth/AuthContext";

const ProductsState = (props) => {
  const initalState = {
    products: [],
    shoppingCart: [],
    filtered: null,
    menuSlideToggle: false,
    shoppingCartSlideToggle: false,
    loading: false,
  };
  const [state, dispatch] = useReducer(ProductsReducer, initalState);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  ///////////////////
  //GET ALL PRODUCTS
  const getAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      errorToast("Something went wrong!");
    }
  };

  ////////////////////
  //FILTERED PRODUCTS
  const filteredProducts = (text) => {
    dispatch({ type: FILTER_PRODUCTS, payload: text });
  };

  ///////////////
  //CLEAR FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  /////////////////////////////
  //GET ALL ARTICELS FROM CART
  const getAllArticelsForCart = (token) => {
    console.log("token:", token);
    if (token) {
      const data = { token };
      axios
        .post("http://localhost:5000/auth/articals", data)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // dispatch({ type: GET_ALL_CART });
          } else {
            errorToast(response.data);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  ////////////////////////
  //ADD A ARTICEL TO CART
  const addArticelToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
    toast.success("Added to your cart!");
  };

  //////////////////////////////
  //REMOVE AN ARTICLE FROM CART
  const removeArticelFromCart = (_id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: _id });
    toast.warning("Removed artical from cart!");
  };

  ///////////////////////
  //MENU SLIDE TOGGLE FN
  const menuSlideToggleFn = (boolean) => {
    if (boolean) {
      dispatch({ type: MENU_SLIDE_TOGGLE, payload: true });
    } else {
      dispatch({ type: MENU_SLIDE_TOGGLE, payload: false });
    }
  };

  /////////////////////////////
  //SHOPPING CART SLIDE TOGGLE
  const shoppingCartSlideToggleFn = (boolean) => {
    if (boolean) {
      dispatch({ type: SHOPPING_CART_TOGGLE, payload: true });
    } else {
      dispatch({ type: SHOPPING_CART_TOGGLE, payload: false });
    }
  };

  //////////////////
  //SUCCESS MESSAGE
  const successToast = (msg) => toast.success(msg);

  ////////////////
  //ERROR MESSAGE
  const errorToast = (msg) => toast.error(msg);

  //////////////
  //SET LOADING
  const setLoading = (boolean) => {
    dispatch({ type: SET_LOADING, payload: boolean });
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        filtered: state.filtered,
        shoppingCart: state.shoppingCart,
        menuSlideToggle: state.menuSlideToggle,
        shoppingCartSlideToggle: state.shoppingCartSlideToggle,
        loading: state.loading,
        getAllProducts,
        filteredProducts,
        clearFilter,
        getAllArticelsForCart,
        addArticelToCart,
        removeArticelFromCart,
        menuSlideToggleFn,
        shoppingCartSlideToggleFn,
        successToast,
        errorToast,
        setLoading,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
