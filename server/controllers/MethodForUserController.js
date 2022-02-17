const { User } = require("../models/UserSchema");

const AddTocart = async (req, res) => {
  const { _id, quality, _id_Product, price } = req.body; //Price

  const cart = {
    _id: _id,
    quality: quality,
    _id_Product: _id_Product,
    price: price,
  };
  ////cart.length===0
  //khac loai----->else
  //cung loai---ok---->else

  User.findById(_id, (err, result) => {
    const lengthCart = result.cart.length;

    if (result.cart.length === 0) {
      result.cart[lengthCart] = cart;
      result.save();
      res.send("updated");
    } else {
      const checkExistItems = result.cart.filter((e) => {
        return e._id_Product === _id_Product;
      });
      if (checkExistItems.length === 0) {
        //Khac loai
        result.cart[lengthCart] = cart;
        result.save();
        res.send("updated");
      } else {
        //cung loai
        const theSameType = result.cart.filter(
          (e) => e._id_Product === _id_Product
        );
        let newQuality = 0;
        theSameType.map((e) => {
          return (newQuality += e.quality);
        });
        const cart2 = {
          _id: _id,
          quality: quality + newQuality,
          _id_Product: _id_Product,
          price: price,
        };
        for (let i = 0; i < lengthCart; i++) {
          if (result.cart[i]._id_Product === _id_Product) {
            result.cart[i] = cart2;
          }
        }
        result.save();
        res.send("updated");
      }
    }
  });
};

const DeleteItem = async (req, res) => {
  const { _id_Product, id_User } = req.body;

  User.findById(id_User, (err, result) => {
    result.cart = result.cart.filter((e) => e._id_Product !== _id_Product);
    result.save();
    res.send("Updated");
  });
};

const GetItemsCart = (req, res) => {
  const { _id } = req.body;
  User.findById(_id, (err, result) => {
    res.json({ cart: result.cart });
  });
};

const AddQualityItem = async (req, res) => {
  const { id_User, _id_Product, quality, price } = req.body;

  User.findById(id_User, async (err, result) => {
    await result.cart.filter((e, index) => {
      if (e._id_Product === _id_Product) {
        const obj2 = {
          _id: id_User,
          _id_Product: e._id_Product,
          quality: quality,
          price: price,
        };
        result.cart[index] = obj2;
        result.save();
        res.json({ success: true, msg: "Updated" });
      }
    });
  });
};

const SubtractQualityItem = async (req, res) => {
  const { id_User, _id_Product, quality, price } = req.body;

  User.findById(id_User, async (err, result) => {
    await result.cart.filter((e, index) => {
      if (e._id_Product === _id_Product) {
        const obj2 = {
          _id: id_User,
          _id_Product: e._id_Product,
          quality: quality,
          price: price,
        };
        result.cart[index] = obj2;
        result.save();
        res.json({ success: true, msg: "Updated" });
      }
    });
  });
};

const PostOrder = (req, res) => {
  //Iduser
  const { email, fullName, address, phoneNumber, _id, idCart, date } = req.body;
  const ERROR_EMAIL = [];
  const ERROR_PhoneNumber = [];
  const numberType = 21;
  if (typeof numberType !== typeof phoneNumber) {
    ERROR_PhoneNumber.push("Invalid phone number !!");
  }
  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    ERROR_EMAIL.push("Email is invalid !");
  }
  if (ERROR_EMAIL.length === 0 && ERROR_PhoneNumber.length === 0) {
    /// order[i] === {id,cart(current)}
    ///gan cart === empty array
    ////su dung uuid ben client side

    User.findById(_id, (err, result) => {
      if (result.cart.length === 0) {
        res.json({ success: false, msg: "Cart is empty" });
      }
      const cart = result.cart;
      const order = {
        _id: idCart,
        cart: cart,
        fullName: fullName,
        address: address,
        phoneNumber: phoneNumber,
        date: date,
      };
      const lengthOrder = result.order.length;
      result.order[lengthOrder] = order;
      result.cart = [];
      result.save();
      res.send("Order successfully !!!");
    });
  } else {
    const err = {
      ERROR_EMAIL: ERROR_EMAIL,
      ERROR_PhoneNumber: ERROR_PhoneNumber,
    };
    res.json({ success: false, err: err });
  }
};
module.exports = {
  AddTocart,
  DeleteItem,
  GetItemsCart,
  AddQualityItem,
  SubtractQualityItem,
  PostOrder,
};
