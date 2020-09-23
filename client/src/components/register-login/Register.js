import React, { Fragment, useState, useContext } from "react";
import Headline from "../products/Headline";
import validator from "validator";
import AuthContext from "../../context/auth/AuthContext";
import { useHistory } from "react-router-dom";

function Register() {
  /////////////////////////
  //AUTHENTICATION CONTEXT
  const authContext = useContext(AuthContext);
  const { errorAuthentication, registerUser } = authContext;

  ////////////////
  //SET THE STATE
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    street: "",
    postcode: "",
    city: "",
    phoneNum: "",
    email: "",
    password: "",
    repassword: "",
  });
  const history = useHistory();
  const [validation, setValidation] = useState(true);
  //DESTRUCTURING USER STATE
  const {
    fname,
    lname,
    street,
    postcode,
    city,
    phoneNum,
    email,
    password,
    repassword,
  } = user;

  /////////////////////////////////////
  //SET THE INPUT VALUES TOT THE STATE
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  ////////////////////////////////
  //VALIDATOR CHECK ON BLUR EVENT
  const onBlur = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "fname":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isLength(e.target.value, { min: 2, max: 50 })
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("First name is not valid");
        }
        break;
      case "lname":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isLength(e.target.value, { min: 2, max: 50 })
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("Last name is not valid");
        }
        break;
      case "street":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isLength(e.target.value, { min: 2, max: 100 })
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("Street is not valid");
        }
        break;
      case "postcode":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isPostalCode(e.target.value, "DE")
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("Postcode is not valid");
        }
        break;
      case "city":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isLength(e.target.value, { min: 2, max: 100 })
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("City is not valid");
        }
        break;
      case "phoneNum":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isMobilePhone(e.target.value, "de-DE")
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("Phonenumber is not valid");
        }
        break;
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
      case "repassword":
        if (
          !validator.isEmpty(e.target.value) &&
          validator.isLength(e.target.value, { min: 5, max: 50 })
        ) {
          setValidation(true);
        } else {
          setValidation(false);
          errorAuthentication("Repassword is not falid");
        }
        break;

      default:
        break;
    }
  };

  ///////////////
  //SEND THE FORM
  const onSubmit = (e) => {
    e.preventDefault();
    //SEND TO CONTEXT REGISTER
    if (user.password === user.repassword) {
      if (validation) {
        //CALL CONTEXT FN
        registerUser(user);
        setUser({
          fname: "",
          lname: "",
          street: "",
          postcode: "",
          city: "",
          phoneNum: "",
          email: "",
          password: "",
          repassword: "",
        });
        history.push("/");
      } else {
        errorAuthentication("Some field is wrong, validation failed!");
      }
    } else {
      errorAuthentication("Passwords are not the same");
    }
  };
  return (
    <Fragment>
      <Headline txt="Register now"></Headline>
      <div className="form-container">
        <form onSubmit={onSubmit} className="mb-5">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="fname"
            value={fname}
            onChange={onChange}
            onBlur={onBlur}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lname"
            value={lname}
            onChange={onChange}
            onBlur={onBlur}
          />

          <label htmlFor="street">Street & Number</label>
          <input
            type="text"
            id="street"
            name="street"
            value={street}
            onChange={onChange}
            onBlur={onBlur}
          />

          <label htmlFor="postcode">Postcode</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={postcode}
            onChange={onChange}
            onBlur={onBlur}
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={onChange}
            onBlur={onBlur}
          />

          <label htmlFor="phoneNum">Phone Number</label>
          <input
            type="number"
            id="phoneNum"
            name="phoneNum"
            value={phoneNum}
            onChange={onChange}
            onBlur={onBlur}
          />

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

          <label htmlFor="password-again">Repeat Password</label>
          <input
            type="text"
            id="password-again"
            name="repassword"
            value={repassword}
            onChange={onChange}
            onBlur={onBlur}
          />

          <input
            type="submit"
            id="registerBtn"
            className="btn"
            value="REGISTER"
          />
        </form>
      </div>
    </Fragment>
  );
}

export default Register;
