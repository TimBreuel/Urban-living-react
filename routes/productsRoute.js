const express = require("express");

//IMPORT PRODUCT ROUTES
const products = express.Router();
const mongooseProductModel = require("../modules/mongooseProductModel");

/////////////////////////
//ROUTE GET ALL PRODUCTS
products.get("/", (req, res) => {
  mongooseProductModel
    .getALLProducts()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => console.log(error));
});

/////////////////////////
//ROUTE GET ALL PRODUCTS
products.post("/category", (req, res) => {
  const { category } = req.body;
  // console.log(category);
  mongooseProductModel
    .getProductsCategory(category)
    .then((products) => {
      // console.log("Hello from get:", products);
      res.json(products);
    })
    .catch((error) => console.log(error));
});

////////////////////
//ROUTE ADD PRODUCT
products.post("/addProduct", (req, res) => {
  const {
    name,
    category,
    price,
    color,
    imageS,
    imageL,
    description,
  } = req.body;
  mongooseProductModel
    .addProduct(name, category, price, color, imageS, imageL, description)
    .then((data) => {
      res.send(data);
      console.log("Added to database");
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
});

module.exports = products;
