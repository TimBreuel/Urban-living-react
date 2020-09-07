import { IS_AUTHENTICATED, IS_NOT_AUTHENTICATED } from "../types";

export default (state, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case IS_NOT_AUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};
