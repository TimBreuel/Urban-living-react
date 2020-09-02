const express = require("express");
const cors = require("cors");
const app = express();
const productsRoute = require("./routes/productsRoute");
const authRoute = require("./routes/authRoute");
//////////////////////
//MIDDLEWARE FUNCTIONS
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use("/products", productsRoute);
app.use("/auth", authRoute);

/////////////
//ROUTE HOME
app.get("/", (req, res) => {
  res.send("Hello Urban living react home...");
});

//SERVE static assets in Production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port 5000!");
});
