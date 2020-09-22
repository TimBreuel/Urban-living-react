const mongoose = require("mongoose");
const { Schema } = mongoose;
/////////////////
//PRODUCT SCHEMA
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    max: 10000,
  },
  color: {
    type: String,
    required: true,
  },
  imageS: {
    type: String,
  },
  imageL: {
    type: String,
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 400,
  },
  amount: {
    type: String,
  },
});

module.exports = mongoose.model("products", productSchema);
