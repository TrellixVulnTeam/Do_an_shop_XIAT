const { User } = require("../models/UserSchema");
const { generateToken, RefreshToken } = require("../config/generateToken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const RegisterController = async (req, res) => {
  const { username, email, password } = req.body;
  const ERROR_PASSWORD = [];
  const ERROR_EMAIL = [];
  const ERROR_USERNAME = [];

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    ERROR_EMAIL.push("Account already exists !");
  }
  ///Validate form

  if (!username) {
    ERROR_USERNAME.push("Please fill in the field!");
  }
  if (!email) {
    ERROR_EMAIL.push("Please fill in the field!");
  }
  if (!password) {
    ERROR_PASSWORD.push("Please fill in the field!");
  }

  if (password.length < 8) {
    ERROR_PASSWORD.push("Your password must be more 8 character !");
  }
  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    ERROR_EMAIL.push("Email is invalid !");
  }

  ///Generate refreshtoken

  const newRefreshToken = RefreshToken(email);

  if (
    ERROR_PASSWORD.length === 0 &&
    ERROR_EMAIL.length === 0 &&
    ERROR_USERNAME.length === 0
  ) {
    bcrypt.hash(password, 12, async (err, hash) => {
      const hashPassword = hash;

      const newUser = new User({
        username: username,
        email: email,
        password: hashPassword,
        refresToKen: newRefreshToken,
      });
      await newUser.save();
      res.json({ success: true, msg: "Create account sucessfully !!" });
    });
  } else {
    const ERROR = {
      ERROR_PASSWORD: ERROR_PASSWORD,
      ERROR_EMAIL: ERROR_EMAIL,
      ERROR_USERNAME: ERROR_USERNAME,
    };
    res.status(200).json({
      success: false,
      msg: "Create account unsucessfully !!",
      err: ERROR,
    });
  }
};

const LoginController = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body)
  const ERROR_PASSWORD = [];
  const ERROR_EMAIL = [];
  const oldUser = await User.findOne({ email });

  if (!oldUser) {
    ERROR_EMAIL.push("Email does not exist");
  }
  if (oldUser !== null && oldUser !== undefined) {
    const checkPassword = await bcrypt.compare(password, oldUser.password);
    if (!checkPassword) {
      ERROR_PASSWORD.push("Password is wrong");
    }
  }
  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    ERROR_EMAIL.push("Email is invalid !");
  }
  if (password.length < 8) {
    ERROR_PASSWORD.push("Your password must be more 8 character !");
  }
  if (ERROR_EMAIL.length == 0 && ERROR_PASSWORD.length == 0) {
    const accessToken = generateToken(email);
    res.status(200).json({
      success: true,
      accessToken: accessToken,
      msg: "Access Token is created !",
    });
  } else if (ERROR_PASSWORD.length > 0 || ERROR_EMAIL.length > 0) {
    res.status(200).json({
      success: false,
      err_password: ERROR_PASSWORD,
      err_email: ERROR_EMAIL,
    });
  }
};

const CheckToken = async (req, res) => {
  //Check token for returning data

  const bearHeader = req.header("Authorization");
  if (typeof bearHeader !== "undefined") {
    const bearer = bearHeader.split(" ");
    const bearerToken = bearer[1];
    const decodeToken = await jwt.verify(bearerToken, process.env.SECRETKEY);
    if (!decodeToken) {
      res.json({ success: false, msg: "Token is invalid" });
    } else {
      const dataUser = await User.findOne({ email: decodeToken.data }); //dataUser of this token
      if (dataUser.length === 0) {
        res.json({ success: false, msg: "Data doesn't exist !!" });
      } else {
        if (dataUser.admin) {
          const dataAdmin = await User.find({});
          res.json({ dataUser: dataAdmin, dataAdmin: dataUser }); //dataAdmin is alldata-----key
        } else {
          res.json({ dataUser: dataUser });
        }
      }
    }
  } else res.json({ success: false, msg: "Authorize unsuccessfully!" });
};

//Check refreshToken ---> create expired access Token

///CheckToken

const checkExpiredAccessToken = async (req, res) => {
  const bearHeader = req.header("Authorization");
  if (typeof bearHeader !== "undefined") {
    const bearer = bearHeader.split(" ");
    const bearerToken = bearer[1];
    const decodeToken = await jwt.verify(bearerToken, process.env.SECRETKEY);

    if (!decodeToken) {
      res.json({
        success: false,
        msg: "Token is valid!",
      });
    }

    const emailUser = decodeToken.data;
    const newAcessToken = generateToken(emailUser);
    res.json({
      success: true,
      accessToken: newAcessToken,
      msg: "New accessToken is generated !",
    });
  }
  res.json({
    success: false,
    msg: "Return expired accessToken unsuccessfully !",
  });
};

module.exports = {
  RegisterController,
  LoginController,
  CheckToken,
  checkExpiredAccessToken,
};
