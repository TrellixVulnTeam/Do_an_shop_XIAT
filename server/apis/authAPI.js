const express = require("express");
const router = express.Router();

//Import function controller

const {
  RegisterController,
  LoginController,
  CheckToken,
  checkExpiredAccessToken,
} = require("../controllers/authController");

router.post("/register", RegisterController);
router.post("/login", LoginController);
router.post("/checkToken", CheckToken);
router.post("/token", checkExpiredAccessToken);
module.exports = router;
