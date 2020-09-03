const connect = require("../models/connectionFn");
const USER = require("../models/registerUserSchema");
const passwordHash = require("password-hash");

function registerUser(user) {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        const newUser = new USER({
          firstName: user.fname,
          lastName: user.lname,
          street: user.street,
          postcode: user.postcode,
          city: user.city,
          phoneNum: user.phoneNum,
          email: user.email,
          password: passwordHash.generate(user.password),
          articals: [],
        });
        newUser
          .save()
          .then((user) => {
            resolve(user);
          })
          .catch((err) => {
            if (err.code === 11000) {
              reject("exist");
            } else {
              reject(err);
            }
          });
      })
      .catch((err) => reject(err));
  });
}

const loginUser = (user) => {
  return new Promise((resolve, reject) => {});
};

module.exports = { registerUser };
