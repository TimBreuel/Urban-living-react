import React, { Fragment, useState, useContext } from "react";
import Headline from "../products/Headline";
import validator from "validator";
import ProductsContext from "../../context/products/ProductsContext";

function Register() {
  const productsContext = useContext(ProductsContext);
  const { successToast, errorToast } = productsContext;

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
  const [validation, setValidation] = useState(true);
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

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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
          errorToast("First name is not valid");
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
          errorToast("Last name is not valid");
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
          errorToast("Street is not valid");
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
          errorToast("Postcode is not valid");
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
          errorToast("City is not valid");
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
          errorToast("Phonenumber is not valid");
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
          errorToast("Email is not valid");
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
          errorToast("Password is not falid");
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
          errorToast("Repassword is not falid");
        }
        break;

      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //SEND TO CONTEXT REGISTER
    if (user.password === user.repassword) {
      if (validation) {
        //CALL CONTEXT FN
      } else {
        errorToast("Some field is wrong, validation failed!");
      }
    } else {
      errorToast("Passwords are not the same");
    }
  };
  return (
    <Fragment>
      <Headline txt="Register now"></Headline>
      <div className="form-container">
        <form onSubmit={onSubmit}>
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
