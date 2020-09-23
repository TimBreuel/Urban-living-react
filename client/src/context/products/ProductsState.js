import React, { useReducer } from "react";
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
  SET_TOTAL,
} from "../types";
import axios from "axios";
import jwt_decode from "jwt-decode";

///////////////
//INITIAL STATE
const ProductsState = (props) => {
  const initalState = {
    products: [],
    shoppingCart: [],
    filtered: null,
    menuSlideToggle: false,
    shoppingCartSlideToggle: false,
    loading: false,
    totalCost: null,
  };
  const [state, dispatch] = useReducer(ProductsReducer, initalState);

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
    if (token) {
      let decoded = jwt_decode(token);
      const data = { decoded };
      axios
        .post("http://localhost:5000/auth/articals", data)
        .then((response) => {
          if (response.status === 200) {
            let totalCost = 0;
            response.data.forEach((artical) => {
              let insideCost = 0;
              let originalPrice = artical.price / artical.amount;
              insideCost = artical.amount * originalPrice;
              totalCost += insideCost;
            });

            dispatch({
              type: GET_ALL_CART,
              payload: { data: response.data, totalCost: totalCost },
            });
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
  const addArticelToCart = (product, token) => {
    let decoded = jwt_decode(token);
    product.amount = 1;

    const data = { decoded, product };
    axios
      .post("http://localhost:5000/auth/articals/add", data)
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          let totalCost = 0;
          response.data.forEach((artical) => {
            let insideCost = 0;
            let originalPrice = artical.price / artical.amount;
            insideCost = artical.amount * originalPrice;
            totalCost += insideCost;
          });
          dispatch({
            type: ADD_TO_CART,
            payload: { data: response.data, totalCost: totalCost },
          });
          successToast("Added to your cart");
        } else {
          errorToast(response.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //////////////////////////////
  //REMOVE AN ARTICLE FROM CART
  const removeArticelFromCart = (product, token) => {
    let decoded = jwt_decode(token);
    const data = { decoded, product };

    axios
      .post("http://localhost:5000/auth/articals/remove", data)
      .then((response) => {
        if (response.status === 200) {
          // console.log("REMOVE:", response.data);

          dispatch({ type: REMOVE_FROM_CART, payload: product });
          toast.warning("Removed artical from cart!");
        } else {
          errorToast("Something went wrong!");
        }
      })
      .catch((err) => console.log(err));
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

  ///////////
  //SET TOTAL
  const setTotal = () => {
    dispatch({ type: SET_TOTAL });
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
        totalCost: state.totalCost,
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
        setTotal,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
