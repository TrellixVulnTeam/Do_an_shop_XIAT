const User = require("../models/UserSchema");
const { generateToken, RefreshToken } = require("../config/generateToken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const RegisterController = async (req, res) => {
  const { username, email, password } = req.body;
  const oldUser = await User.findOne({ email });

  if (!username || !email || !password)
    res.json({ success: false, msg: "Please fill in the field!" });
  if (password.length < 8)
    res.json({
      success: false,
      msg: "Your password must be more 8 character !",
    });
  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))
    res.json({ success: false, msg: "Email is invalid !" });
  if (oldUser) res.json({ success: false, msg: "Account already exists !" });

  const newRefreshToken = RefreshToken(email);
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
};

const LoginController = async (req, res) => {
  const { email, password } = req.body;
  const ERROR_PASSWORD = [];
  const ERROR_EMAIL = [];
  const oldUser = await User.findOne({ email });
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
  if (!oldUser) {
    ERROR_EMAIL.push("Email does not exist");
  }
  if (ERROR_EMAIL.length == 0 && ERROR_PASSWORD.length == 0) {
    const accessToken = generateToken(email);
    res.status(200).json({
      success: true,
      accessToken: accessToken,
      msg: "Access Token is created !",
    });
  } else if (ERROR_PASSWORD.length > 0 || ERROR_PASSWORD > 0) {
    res.status(200).json({
      success: false,
      err_password: ERROR_PASSWORD,
      err_email: ERROR_EMAIL,
    });
  }
};

const CheckToken = async (req, res) => {
  //Check token

  const bearHeader = req.header("Authorization");
  if (typeof bearHeader !== "undefined") {
    const bearer = bearHeader.split(" ");
    const bearerToken = bearer[1];
    const decodeToken = await jwt.verify(bearerToken, process.env.SECRETKEY);

    if (!decodeToken) res.json({ success: false, msg: "Token is invalid" });
    else {
      await User.find({ email: decodeToken.data }, async (err, result) => {
        if (err) res.json("Error : " + err);
        else {
          //Authorize
          if (result[0].admin === true) {
            await User.find({}, (err, alldata) => {
              let value = alldata;
              for (let i = 0; i < value.length; i++) {
                value[i].password = "*****************";
              }
              if (err) res.json({ msg: ` Error: ${err}` });
              else res.json({ data: value });
            });
          } else
            res.json({
              success: true,
              data: result,
              msg: `You are member`,
            });
        }
      });
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
  req.json({
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
