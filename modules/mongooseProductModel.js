const connect = require("../models/connectionFn");
const PRODUCT = require("../models/productSchema");
//////////////////////////////
//ADD PRODUCT TO THE DATABASE
function addProduct(name, category, price, color, imageS, imageL, description) {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        const newProduct = new PRODUCT({
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

module.exports = {
  addProduct,
};
