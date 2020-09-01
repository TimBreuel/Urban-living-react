import React, { Fragment, useState } from "react";
import Headline from "../products/Headline";

function Register() {
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

  const onSubmit = (e) => {
    //SEND TO CONTEXT REGISTER
  };
  return (
    <Fragment>
      <Headline txt="Register now"></Headline>
      <div class="form-container">
        <form onSubmit={onSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="fname"
            value={fname}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lname"
            value={lname}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <label htmlFor="street">Street & Number</label>
          <input
            type="text"
            id="street"
            name="street"
            value={street}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <label htmlFor="postcode">Postcode</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={postcode}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <label htmlFor="phoneNum">Phone Number</label>
          <input
            type="number"
            id="phoneNum"
            name="phoneNum"
            value={phoneNum}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <label htmlFor="password-again">Repeat Password</label>
          <input
            type="text"
            id="password-again"
            name="repassword"
            value={repassword}
            onChange={onChange}
          />
          <div class="invalid-feedback"></div>

          <input type="submit" id="registerBtn" class="btn" value="REGISTER" />
        </form>
      </div>
    </Fragment>
  );
}

export default Register;
