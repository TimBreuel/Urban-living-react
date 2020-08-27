import { GET_PRODUCTS, GET_PRODUCTS_CATEGORY } from "../types";

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
        products: action.payload,
      };

    default:
      return state;
  }
};
