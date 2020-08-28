import {
  GET_PRODUCTS,
  GET_PRODUCTS_CATEGORY,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
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

    default:
      return state;
  }
};
