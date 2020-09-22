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

const userArticals = (id) => {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        USER.findById({ _id: id }).then((user) => {
          if (user) {
            resolve(user.articals);
          } else {
            reject("User not find");
          }
        });
      })
      .catch((err) => reject(err));
  });
};

//////////////////////
//ADD ARTICAL TO CART
const userArticalsAdd = (id, product) => {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        USER.findById({ _id: id })
          .then((user) => {
            if (user) {
              let check = false;
              user.articals.forEach((artical) => {
                if (artical._id == product._id) {
                  artical.amount = artical.amount + 1;
                  check = true;
                }
              });
              if (check === false) {
                user.articals.push(product);
              }
              // console.log("BEVORE:", user);
              user
                .save()
                .then((user) => {
                  console.log("END", user);
                  resolve(user.articals);
                })
                .catch((err) => reject(err));
            } else {
              reject("User not find");
            }
          })
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};

const userArticalsRemove = (id, productId) => {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        USER.updateOne({ _id: id }, { $pull: { articals: { _id: productId } } })
          .then((product) => {
            resolve("Deleted from Array");
          })
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};

module.exports = {
  registerUser,
  loginUser,
  userArticals,
  userArticalsAdd,
  userArticalsRemove,
};
