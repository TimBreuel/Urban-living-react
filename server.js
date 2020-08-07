const express = require("express");
const app = express();
const mongooseProductModel = require("./modules/mongooseProductModel");

//////////////////////
//MIDDLEWARE FUNCTIONS
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

/////////////
//ROUTE HOME
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Urban living react...");
});

////////////////////
//ROUTE ADD PRODUCT
app.post("/addProduct", (req, res) => {
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
    .then(() => {
      console.log("Added to database");
    })
    .catch((error) => {
      console.log(error);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port 5000!");
});
