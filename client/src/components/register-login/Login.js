import React, { Fragment, useState, useContext } from "react";
import Headline from "../products/Headline";
import validator from "validator";
import AuthContext from "../../context/auth/AuthContext";
import { useHistory } from "react-router-dom";

function Login() {
  const authContext = useContext(AuthContext);
  const { errorAuthentication, loginUser } = authContext;
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState(true);
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onLogIn = (e) => {
    e.preventDefault();
    loginUser(user);
    setUser({ email: "", password: "" });
    history.push("/", user);
  };

  const onBlur = (e) => {
    e.preventDefault();

    switch (e.target.name) {
      case "email":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isEmail(e.target.value)
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("Email is not valid");
        }
        break;
      case "password":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isLength(e.target.value, { min: 5, max: 50 })
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("Password is not falid");
        }
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validation) {
      //CALL CONTEXT FN
      loginUser(user);
      setUser({
        email: "",
        password: "",
      });
    } else {
      errorAuthentication("Somthing went wrong!");
    }
  };
  return (
    <Fragment>
      <Headline txt="Login"></Headline>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            onBlur={onBlur}
          />

          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            onBlur={onBlur}
          />

          <input
            type="submit"
            className="btn"
            value="LOGIN"
            onClick={onLogIn}
          />
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
