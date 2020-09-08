const express = require("express");
const auth = express.Router();
const authControler = require("../auth/authControler");
const mongooseUserModule = require("../modules/mongooseUserModel");

auth.post("/login", (req, res) => {
  const checkData = authControler.authValidation(req.body);
  if (checkData) {
    mongooseUserModule
      .loginUser(req.body.email, req.body.password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("ERR:", err);
      });
  } else {
    res.json(checkData);
  }
});

auth.post("/register", (req, res) => {
  const checkData = authControler.authValidation(req.body);
  if (checkData) {
    mongooseUserModule
      .registerUser(req.body)
      .then((user) => {
        const token = authControler.createToken(user._id);
        res.json({ token: token });
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
