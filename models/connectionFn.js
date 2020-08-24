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
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        })
        .then(() => resolve())
        .catch((error) => reject(error));
    }
  });
}

module.exports = connect;
