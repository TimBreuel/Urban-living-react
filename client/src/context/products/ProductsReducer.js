import { GET_PRODUCTS, GET_PRODUCTS_CATEGORY, SET_DETAILS } from "../types";

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
    case SET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
};
