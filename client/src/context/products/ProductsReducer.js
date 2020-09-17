import {
  GET_PRODUCTS,
  GET_PRODUCTS_CATEGORY,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  ADD_TO_CART,
  GET_ALL_CART,
  REMOVE_FROM_CART,
  MENU_SLIDE_TOGGLE,
  SHOPPING_CART_TOGGLE,
  SET_LOADING,
  SET_TOTAL,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_CATEGORY:
      return {
        ...state,
        productsCategory: action.payload,
        loading: false,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filtered: state.products.filter((product) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            product.category.match(regex) ||
            product.name.match(regex) ||
            product.color.match(regex)
          );
        }),
        loading: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false,
      };
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCart: action.payload.data,
        loading: false,
        totalCost: action.payload.totalCost,
      };
    case GET_ALL_CART:
      return {
        ...state,
        shoppingCart: action.payload.data,
        loading: false,
        totalCost: action.payload.totalCost,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (article) => article._id !== action.payload._id
        ),
        loading: false,
        totalCost: state.totalCost - action.payload.price,
      };
    case MENU_SLIDE_TOGGLE:
      return {
        ...state,
        menuSlideToggle: action.payload,
      };
    case SHOPPING_CART_TOGGLE:
      return {
        ...state,
        shoppingCartSlideToggle: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        shoppingCart: [],
        filtered: null,
        menuSlideToggle: false,
        shoppingCartSlideToggle: false,
        loading: false,
        totalCost: null,
      };

    default:
      return state;
  }
};
