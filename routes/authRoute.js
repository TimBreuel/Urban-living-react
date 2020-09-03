const express = require("express");
const auth = express.Router();
const authValidator = require("../auth/authValidator");
const mongooseUserModule = require("../modules/mongooseUserModel");

auth.post("/login", (req, res) => {
  const checkData = authValidator(req.body);
  if (checkData) {
    res.json(checkData);
  } else {
    res.json(checkData);
  }
});

auth.post("/register", (req, res) => {
  const checkData = authValidator(req.body);
  if (checkData) {
    mongooseUserModule
      .registerUser(req.body)
      .then((data) => {
        res.json(true);
      })
      .catch((err) => {
        if (err === "exist") {
          res.json("User already exist!");
        } else {
          res.json("Registration went wrong!");
        }
      });
  } else {
    res.json(checkData);
  }
});

module.exports = auth;
