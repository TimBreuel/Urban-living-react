import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { toast } from "react-toastify";
import {} from "../types";
import axios from "axios";

const AuthState = (props) => {
  const initalState = {
    error: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initalState);
  ////////////////////////////////////////////////////////////////
  ///////////////////////METHODS//////////////////////////////////

  ////////////////
  //REGISTER USER
  const registerUser = (user) => {
    const data = user;
    axios
      .post("http://localhost:5000/auth/register", data)
      .then((response) => {
        if (response.data === true) {
          successAuthentication("Registration succesfull");
        } else {
          errorAuthentication(response.data);
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
      .post("http://localhost:5000/auth/login", data)
      .then((response) => {
        if (response.data === true) {
          successAuthentication("Login succesfull");
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

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        successAuthentication,
        errorAuthentication,
        registerUser,
        loginUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
