const connect = require("../models/connectionFn");
const USER = require("../models/registerUserSchema");
const passwordHash = require("password-hash");

///////////////
//REGISTER USER
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

/////////////
//LOGIN USER
const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        USER.findOne({ email: email })
          .then((user) => {
            if (user) {
              if (passwordHash.verify(password, user.password)) {
                resolve(user);
              } else {
                reject("Password not match");
              }
            } else {
              reject("Email not found");
            }
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = { registerUser, loginUser };
