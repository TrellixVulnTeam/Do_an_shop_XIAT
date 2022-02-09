const {
  Chicken,
  Dumplings,
  Pizza,
  Sushi,
  Pancake,
  Hamburger,
  Noodle,
  Salad,
  Cupcakes,
  Spaghetti,
  Pasta,
  Steak,
  Fries,
  Sandwich,
} = require("../models/DataProductSchema");

//Post data
const postDataPizza = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataPizza = new Pizza({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataPizza.save();
};

const postDataSushi = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataSushi = new Sushi({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataSushi.save();
};

const postDataPancake = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataPancake = new Pancake({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataPancake.save();
};

const postDataDumplings = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataDumplings = new Dumplings({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataDumplings.save();
};

const postDataChicken = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataChicken = new Chicken({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataChicken.save();
};

const postDataNoodle = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataNoodle = new Noodle({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataNoodle.save();
};

const postDataSalad = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataSalad = new Salad({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataSalad.save();
};

const postDataCupcakes = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataCupcakes = new Cupcakes({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataCupcakes.save();
};

const postDataHamburger = async (req, res) => {
  const { foodName, images, description, price } = req.body;
  const newDataHamburger = new Hamburger({
    foodName: foodName,
    images: images,
    description: description,
    price: price,
  });
  await newDataHamburger.save();
};

module.exports = {
  postDataPizza,
  postDataSushi,
  postDataPancake,
  postDataDumplings,
  postDataNoodle,
  postDataChicken,
  postDataSalad,
  postDataHamburger,
  postDataCupcakes,
};
