const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURI, {}, (err) => {
  if (err) throw err;
  {
    console.log("Connected to DBProduct!!!");
  }
});

mongoose.DataaaaUsers = mongoose.createConnection(
  process.env.MONGOURIUSER,
  {},
  (err) => {
    if (err) throw err;
    {
      console.log("Connected to DBUser!!!");
    }
  }
);

module.exports = mongoose;
