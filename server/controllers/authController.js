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
  const oldUser = await User.findOne({ email });
  const checkPassword = await bcrypt.compare(password, oldUser.password);
  if (!email || !password)
    res.json({ success: false, msg: "You must fill in the field !!" });
  if (!oldUser) res.json({ success: false, msg: "Email already exits" });
  if (!checkPassword) res.json({ success: false, msg: "Password is wrong" });

  //Check expiredTime refreshToken---->create new refreshToken(expired)
  //Check server Side
  
  //accessToken

  const accessToken = generateToken(email);
  if (accessToken)
    res.json({
      success: true,
      accessToken: accessToken,
      msg: "Access Token is created !",
    });
  else res.json({ success: false, msg: "Error !! Token is invalid " });
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
                value[i].password = "notpermission";
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

const checkExpiredAccessToken = async (req, res) => {
  const bearHeader = req.header("Authorization");
  if (typeof bearHeader !== "undefined") {
    const bearer = bearHeader.split(" ");
    const bearerToken = bearer[1];
    const decodeToken = await jwt.verify(bearerToken, process.env.REFRESHKEY);
    if (!decodeToken)
      res.json({ success: false, msg: "RefreshToken is invalid!" });

    //Create new access Token
    const email = decodeToken.data;
    const generateToken = (email) => {
      jwt.sign({ data: decodeToken.data }, process.env.SECRETKEY, {
        expiresIn: "20s",
      });
    };
    const accessToken = generateToken(decodeToken.data);
    res.json({
      success: true,
      accessToken: accessToken,
      msg: "Token is generated !",
    });
  } else
    res.json({
      success: false,
      msg: "Returned AccessToken is invalid",
    });
};

module.exports = {
  RegisterController,
  LoginController,
  CheckToken,
  checkExpiredAccessToken,
};
