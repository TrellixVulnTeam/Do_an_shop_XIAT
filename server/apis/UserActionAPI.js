const router = require("express").Router();
const {
  AddTocart,
  DeleteItem,
  GetItemsCart,
  AddQualityItem,
  SubtractQualityItem,
  PostOrder,
} = require("../controllers/MethodForUserController");

router.put("/addToCart", AddTocart);
router.put("/deleteItems", DeleteItem);
router.post("/getItemsCart", GetItemsCart);
router.put("/addItems", AddQualityItem);
router.put("/DecreaseItems", SubtractQualityItem);
router.post("/addOrder", PostOrder);

module.exports = router;
