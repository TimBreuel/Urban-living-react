const mongoose = require("mongoose");
const { Schema } = mongoose;
///////////////////////
//REGISTER USER SCHEMA
const registerUserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  street: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 5,
  },
  postcode: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 5,
  },
  city: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2,
  },
  phoneNum: {
    type: String,
    required: true,
    maxlength: 50,
    min: 5,
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
  articals: {
    type: Array,
  },
});

module.exports = mongoose.model("users", registerUserSchema);
