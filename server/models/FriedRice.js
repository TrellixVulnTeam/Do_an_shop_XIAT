const mongoose = require('mongoose')

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

const FriedRice = new mongoose.Schema({
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


module.exports = mongoose.model('friedRice', FriedRice)
