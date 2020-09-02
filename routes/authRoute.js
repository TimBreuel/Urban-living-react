const express = require("express");
const auth = express.Router();
const authValidator = require("../auth/authValidator");

auth.post("/login", (req, res) => {
  console.log("authRoute:", req.body);
  console.log(authValidator(req.body));
});

auth.post("/register", (req, res) => {
  console.log("authRegister", req.body);
});

module.exports = auth;
