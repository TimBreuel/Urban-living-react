const express = require("express");
const user = express.Router();

user.get("/", (req, res) => {
  res.send("Hello user");
});

user.get("/login", (req, res) => {
  res.send("Please Login");
});

user.get("/register", (req, res) => {
  res.send("Please Register");
});

module.exports = user;
