const mongoose = require("mongoose");
const { connectionUser } = require("../config/dbConnect");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
const User = connectionUser.model("users", UserSchema);

module.exports = { User };
