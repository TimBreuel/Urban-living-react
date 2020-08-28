import {
  GET_PRODUCTS,
  GET_PRODUCTS_CATEGORY,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  ADD_TO_CART,
  GET_ALL_CART,
  REMOVE_FROM_CART,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_CATEGORY:
      return {
        ...state,
        productsCategory: action.payload,
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
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCart: [action.payload, ...state.shoppingCart],
      };
    case GET_ALL_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (article) => article._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
