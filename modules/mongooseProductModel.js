const connect = require("../models/connectionFn");
const PRODUCTS = require("../models/productSchema");
//////////////////////////////
//ADD PRODUCT TO THE DATABASE
function addProduct(name, category, price, color, imageS, imageL, description) {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        const newProduct = new PRODUCTS({
          name,
          category,
          price,
          color,
          imageS,
          imageL,
          description,
        });
        newProduct
          .save()
          .then((data) => resolve(data))
          .catch((error) => {
            if (error.code === 11000) {
              reject("exist");
            } else {
              reject(new Error("addProduct error2:", error));
            }
          });
      })
      .catch((error) => reject(new Error("addProduct error1:", error)));
  });
}

/////////////////////////////////
//GET ALL PRODUCTS FROM THE DATABASE
function getALLProducts() {
  return new Promise((resolve, reject) => {
    connect().then(() => {
      PRODUCTS.find()
        .toArray()
        .then((products) => resolve(products))
        .catch((error) => reject(error));
    });
  });
}

module.exports = {
  addProduct,
  getALLProducts,
};
