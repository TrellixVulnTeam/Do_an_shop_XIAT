const express = require("express");
const router = express.Router();

//import file for post method

const {
  postDataPizza,
  postDataSushi,
  postDataPancake,
  postDataDumplings,
  postDataNoodle,
  postDataChicken,
  postDataSalad,
  postDataHamburger,
  postDataCupcakes,
} = require("../controllers/PostDataProductController");

//import file for get method

const {
  getDataPizza,
  getDataSushi,
  getDataPancake,
  getDataHamburger,
  getDataDumplings,
  getDataCupcake,
  getDataChicken,
  getDataNoodle,
  getDataSalad,
} = require("../controllers/GetDataProductController");

/////****************************************************************************************** */

//Get
router.get("/read/pizza", getDataPizza);
router.get("/read/sushi", getDataSushi);
router.get("/read/pancake", getDataPancake);
router.get("/read/hamburger", getDataHamburger);
router.get("/read/cupcake", getDataCupcake);
router.get("/read/dumplings", getDataDumplings);
router.get("/read/chicken", getDataChicken);
router.get("/read/noodle", getDataNoodle);
router.get("/read/salad", getDataSalad);

//************************************************************************** */
//Post

router.post("/pizza", postDataPizza);
router.post("/sushi", postDataSushi);
router.post("/pancake", postDataPancake);
router.post("/hamburger", postDataHamburger);
router.post("/cupcake", postDataCupcakes);
router.post("/dumplings", postDataDumplings);
router.post("/chicken", postDataChicken);
router.post("/noodle", postDataNoodle);
router.post("/salad", postDataSalad);

module.exports = router;
