import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { toast } from "react-toastify";
import {
  IS_AUTHENTICATED,
  IS_NOT_AUTHENTICATED,
  SIGN_OUT,
  SIGN_IN,
  CHECK_LOCALSTORAGE,
} from "../types";
import axios from "axios";

////////////////
//INITIAL STATE
const AuthState = (props) => {
  const initalState = {
    error: null,
    authenticated: false,
    user: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initalState);
  ////////////////////////////////////////////////////////////////
  ///////////////////////METHODS//////////////////////////////////

  ////////////////
  //REGISTER USER
  const registerUser = (user) => {
    const data = user;
    axios
      .post("/auth/register", data)
      .then((response) => {
        if (response.data.token) {
          successAuthentication("Registration succesfull");
          localStorage.setItem("token", response.data.token);
          dispatch({ type: IS_AUTHENTICATED });
        } else {
          errorAuthentication(response.data);
          dispatch({ type: IS_NOT_AUTHENTICATED });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  ////////////
  //LOGIN USER
  const loginUser = (user) => {
    const data = user;
    axios
      .post("/auth/login", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if (response.data === "Email not found") {
            errorAuthentication(response.data);
          }
          if (response.data === "Password not match") {
            errorAuthentication(response.data);
          }
          if (response.data.token !== undefined) {
            localStorage.setItem("token", response.data.token);
            dispatch({ type: SIGN_IN, payload: response.data.token });
            successAuthentication("Login succesfull");
          }
        } else {
          errorAuthentication(response.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //////////////////
  //SUCCESS MESSAGE
  const successAuthentication = (msg) => toast.success(msg);

  ////////////////
  //ERROR MESSAGE
  const errorAuthentication = (msg) => toast.error(msg);

  /////////////////
  //SIGN IN OR OUT
  const signOut = () => {
    dispatch({ type: SIGN_OUT });
    localStorage.removeItem("token");
    successAuthentication("Sign out sucessful");
  };

  //////////////////////
  //CHECK LOCAL STORAGE
  const checkLocalStorageAndLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: CHECK_LOCALSTORAGE, payload: token });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        authenticated: state.authenticated,
        user: state.user,
        successAuthentication,
        errorAuthentication,
        registerUser,
        loginUser,
        signOut,
        checkLocalStorageAndLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
