const mongoose = require('mongoose')

const DBconnect = () => {
    mongoose.connect(process.env.MONGOURI, {}, err => {
        if (err) throw err
        {
            console.log('Ket noi toi DB!!!')
        }
    })
}

module.exports = { DBconnect }
