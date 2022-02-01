const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        required:true
    },
    verify:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('users', User)
