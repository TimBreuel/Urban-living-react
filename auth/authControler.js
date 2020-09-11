const validator = require("validator");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

/////////////////////
//CHECK THE REQ BODY
const authValidation = (user) => {
  let isValid = true;
  let notValidMsg = "";
  const userArray = Object.entries(user);
  userArray.forEach((element) => {
    switch (element[0]) {
      case "fname":
        if (
          validator.isEmpty(element[1]) ||
          !validator.isLength(element[1], { min: 2, max: 50 })
        ) {
          isValid = false;
          notValidMsg += "First name is not valid\n";
        }
        break;
      case "lname":
        if (
          validator.isEmpty(element[1]) ||
          !validator.isLength(element[1], { min: 2, max: 50 })
        ) {
          isValid = false;
          notValidMsg += "Last name is not valid\n";
        }
        break;
      case "street":
        if (
          validator.isEmpty(element[1]) ||
          !validator.isLength(element[1], { min: 2, max: 100 })
        ) {
          isValid = false;
          notValidMsg += "Street is not valid\n";
        }
        break;
      case "postcode":
        if (
          validator.isEmpty(element[1]) ||
          !validator.isPostalCode(element[1], "DE")
        ) {
          isValid = false;
          notValidMsg += "Postcode is not valid\n";
        }
        break;
      case "city":
        if (
          validator.isEmpty(element[1]) ||
          !validator.isLength(element[1], { min: 2, max: 100 })
        ) {
          isValid = false;
          notValidMsg += "City is not valid\n";
        }
        break;
      case "phoneNum":
        if (
          validator.isEmpty(element[1]) ||
          !validator.isMobilePhone(element[1], "de-DE")
        ) {
          isValid = false;
          notValidMsg += "Phonenumber is not valid\n";
        }
        break;
      case "email":
        if (validator.isEmpty(element[1]) || !validator.isEmail(element[1])) {
          isValid = false;
          notValidMsg += "Email is not valid\n";
        }
        break;
      case "password":
        if (
          validator.isEmpty(element[1]) ||
          !validator.isLength(element[1], { min: 5, max: 100 })
        ) {
          isValid = false;
          notValidMsg += "Password is not falid\n";
        }
        break;
      case "repassword":
        if (
          validator.isEmpty(element[1]) ||
          !validator.isLength(element[1], { min: 5, max: 100 })
        ) {
          isValid = false;
          notValidMsg += "Repassword is not falid\n";
        }
        break;

      default:
        break;
    }
  });

  if (isValid) {
    return true;
  } else {
    return notValidMsg;
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, "urban living secret", {
    expiresIn: 3600,
  });
};

const decodeToken = (token) => {
  const decoded = jwt_decode(token);
  return decoded;
};

module.exports = { authValidation, createToken, decodeToken };
