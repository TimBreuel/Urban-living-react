const express = require("express");
const auth = express.Router();
const authControler = require("../auth/authControler");
const mongooseUserModule = require("../modules/mongooseUserModel");

auth.post("/login", (req, res) => {
  const checkData = authControler.authValidation(req.body);
  if (checkData) {
    mongooseUserModule
      .loginUser(req.body.email, req.body.password)
      .then((user) => {
        console.log("test", user);
        if (user) {
          // console.log(user);
          const token = authControler.createToken(user._id);
          res.json({ token: token });
        }
      })
      .catch((err) => {
        console.log("ERR:", err);
        if (err === "Email not found") {
          res.json("Email not found");
        }
        if (err === "Password not match") {
          res.json("Password not match");
        }
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

auth.post("/articals", (req, res) => {
  if (req.body) {
    mongooseUserModule
      .userArticals(req.body.decoded.id)
      .then((articals) => {
        // console.log(articals);
        res.json(articals);
      })
      .catch((err) => console.log(err));
  } else {
    console.log("req.body is empty");
  }
});

auth.post("/articals/add", (req, res) => {
  if (req.body) {
    // console.log("post:", req.body);
    mongooseUserModule
      .userArticalsAdd(req.body.decoded.id, req.body.product)
      .then((articals) => {
        // console.log("post:", articals);
        res.json(articals);
      })
      .catch((err) => console.log(err));
  } else {
    console.log("req.body is empty");
  }
});

auth.post("/articals/remove", (req, res) => {
  if (req.body) {
    mongooseUserModule
      .userArticalsRemove(req.body.decoded.id, req.body.product._id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  } else {
    console.log("req.body is empty");
  }
});

module.exports = auth;
