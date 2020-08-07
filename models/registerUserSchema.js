const mongoose = require("mongoose");
const { Schema } = mongoose;
///////////////////////
//REGISTER USER SCHEMA
const registerUserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2,
  },
  street: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 5,
  },
  postcode: {
    type: Number,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
  city: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
    minlength: 5,
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 5,
  },
});

module.exports = mongoose.model("users", registerUserSchema);
