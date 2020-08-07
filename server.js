const express = require("express");
const app = express();
const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/userRoute");
//////////////////////
//MIDDLEWARE FUNCTIONS
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/products", productsRoute);
app.use("/user", userRoute);

/////////////
//ROUTE HOME
app.get("/", (req, res) => {
  res.send("Hello Urban living react home...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port 5000!");
});
