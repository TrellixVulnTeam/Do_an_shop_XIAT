const express = require('express')
const router = express.Router()

//import file for post method

const { postDataPizza, postDataSushi, postDataPancake,
        postDataDumplings, postDataNoodle, postDataChicken,
        postDataSalad, postDataHamburger, postDataCupcakes,
        postDataSpaghetti, postDataPasta, postDataSteak,
        postDataFries, postDataSandwich
        } = require('../controllers/PostDataProductController')

//import file for get method 

const {
    getDataPizza,
    getDataSushi,
    getDataPancake,
    getDataHamburger,
    getDataDumplings,
    getDataCupcake,
} = require('../controllers/GetDataProductController')

/////****************************************************************************************** */

//Get
router.get('/read/pizza', getDataPizza)
router.get('/read/sushi', getDataSushi)
router.get('/read/pancake', getDataPancake)
router.get('/read/hamburger', getDataHamburger)
router.get('/read/dumplings', getDataDumplings)
router.get('/read/cupcake', getDataCupcake)

//************************************************************************** */
//Post
router.post('/pizza', postDataPizza)
router.post('/sushi', postDataSushi)
router.post('/pancake', postDataPancake)
router.post('/hamburger', postDataHamburger)
router.post('/cupcake', postDataCupcakes)
router.post('/dumplings', postDataDumplings)
//---------------------------
router.post('/chicken', postDataChicken)
router.post('/noodle', postDataNoodle)
router.post('/salad', postDataSalad)
router.post('/spaghetti', postDataSpaghetti)
router.post('/pasta', postDataPasta)
router.post('/steak', postDataSteak)
router.post('/fries', postDataFries)
router.post('/sandwich', postDataSandwich)

module.exports = router