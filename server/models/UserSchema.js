const mongoose = require("mongoose");
const { connectionUser } = require("../config/dbConnect");

const StringType = { type: String, required: true };

const UserSchema = new mongoose.Schema({
  username: StringType,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cart: {
    type: Array,
    default: [],
  },
  order: {
    type: Array,
    default: [],
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  password: StringType,
  refresToKen: {
    type: String,
    required: true,
    default: "",
  },
});
const User = connectionUser.model("users", UserSchema);

module.exports = { User };
