//reqire module mongoose
const mongoose = require('mongoose')

//Initialize variable for Schemas
const {dataProduct} = require("../config/dbConnect")

const reqString = {
    type: String,
    required: true
}
const reqNumber = {
    type: Number,
    required:true,
}
const DateNow =
{
    type: Date,
    required: true,
    default: Date.now
}
//Initialize Schema for product

const newSchema = new mongoose.Schema({
    foodName:reqString,
    images:
        [{
            _id: false,
            imageUrl: String
        }],
    description: reqString,
    price: reqNumber,
    createdAt:DateNow,
    updatedAt: DateNow
})

const Chicken = dataProduct.model('chickens', newSchema)
const Dumplings = dataProduct.model('dumplings', newSchema)
const Hamburger = dataProduct.model('hamburgers', newSchema)
const Noodle = dataProduct.model('noodles', newSchema)
const Pancakes = dataProduct.model('pancakes', newSchema)
const Cupcakes = dataProduct.model('cupcakes', newSchema)
const Salad = dataProduct.model('salads', newSchema)
const Sushi = dataProduct.model('sushis', newSchema)
const Pizza = dataProduct.model('pizzas', newSchema)

//Export module

module.exports = {
    Chicken,
    Dumplings,
    Hamburger,
    Noodle,
    Pancakes,
    Cupcakes,
    Salad,
    Sushi,
    Pizza,
}






