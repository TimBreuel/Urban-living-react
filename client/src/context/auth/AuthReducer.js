import {
  IS_AUTHENTICATED,
  IS_NOT_AUTHENTICATED,
  SIGN_OUT,
  SIGN_IN,
  CHECK_LOCALSTORAGE,
} from "../types";

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
    case SIGN_OUT:
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case SIGN_IN:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case CHECK_LOCALSTORAGE:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
