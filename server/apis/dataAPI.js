const express = require('express')
const router = express.Router()

const { getDataPizza, postDataPizza, postDataFriedChicken, postDataFriedRice,postDataMilkTea, postDataPasta, postDataPorridge } = require('../controllers/dataProduct')

//Get
router.get('/read/pizza', getDataPizza)

//Post
router.post('/pizza', postDataPizza)
router.post('/friedChicken', postDataFriedChicken)
router.post('/milkTea', postDataMilkTea)
router.post('/pasta', postDataPasta)
router.post('/friedRice', postDataFriedRice)
router.post('/porridge',postDataPorridge)


module.exports = router