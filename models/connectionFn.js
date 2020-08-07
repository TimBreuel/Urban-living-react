const mongoose = require("mongoose");

///////////////////////
//URL CONNECTION STRING
const connectionString =
  "mongodb+srv://urban-living-admin:123456abc@urban-living.eex85.mongodb.net/Urban-living?retryWrites=true&w=majority";

////////////////
//CONNECTION FN
function connect() {
  return new Promise((resolve, reject) => {
    if (mongoose.connection.readyState === 1) {
      resolve();
    } else {
      mongoose
        .connect(connectionString, {
          useUnifiedTopology: true,
          useCreateIndex: true,
          useNewUrlParser: true,
        })
        .then(() => resolve())
        .catch((error) => reject());
    }
  });
}

module.exports = connect;
