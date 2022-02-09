const mongoose = require("mongoose");
const connectionUser = require("../config/dbConnect");

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  refresToKen: {
    type: String,
    required: true,
    default: "",
  },
  verify: {
    type: Boolean,
    default: false,
  },
});

module.exports = connectionUser.DataaaaUsers.model("users", User);
