const Pizza  = require('../models/Pizza')
const FriedChicken = require('../models/FriedChicken')
const FriedRice = require('../models/FriedRice')
const MilkTea = require('../models/MilkTea')
const Pasta = require('../models/Pasta')
const Porridge = require('../models/Porridge')

//Get data 

const getDataPizza = async(req,res)=>
{
    Pizza.find({}, (err, result) => {
        if (err) 
            console.log(err)
        return res.json({ data: result })
    })
}

const getDataFriedChicken = async(req,res)=>
{
    FriedChicken.find({}, (err, result) => {
        if (err) 
            console.log(err)
        return res.json({ data: result })
    })
}

const getDataFriedRice = async(req,res)=>
{
    FriedRice.find({}, (err, result) => {
        if (err) 
            console.log(err)
        return res.json({ data: result })
    })
}

const getDataMilkTea = async(req,res)=>
{
    MilkTea.find({}, (err, result) => {
        if (err) 
            console.log(err)
        return res.json({ data: result })
    })
}

const getDataPasta = async(req,res)=>
{
    Pasta.find({}, (err, result) => {
        if (err) 
            console.log(err)
        return res.json({ data: result })
    })
}

const getDataPorridge = async(req,res)=>
{
    Porridge.find({}, (err, result) => {
        if (err) 
            console.log(err)
        return res.json({ data: result })
    })
}

//Post data
const postDataPizza = async (req, res) => {
    const { foodName, images, description, price } = req.body
    const newDataPizza = new Pizza({
        foodName:foodName,
        images:images,
        description:description,
        price:price
    })
    await newDataPizza.save()
}

const postDataFriedChicken = async (req, res) => {
    const { foodName, images, description, price } = req.body
    const newFriedChicken = new FriedChicken({
        foodName:foodName,
        images:images,
        description:description,
        price:price,
    })
    await newFriedChicken.save()
}

const postDataFriedRice = async (req, res) => {
    const { foodName, images, description, price } = req.body
    const newFriedRice = new FriedRice({
        foodName:foodName,
        images:images,
        description:description,
        price:price
    })
    await newFriedRice.save()
}
const postDataMilkTea = async (req, res) => {
    const { foodName, images, description, price } = req.body
    const newMilkTea = new MilkTea({
        foodName:foodName,
        images:images,
        description:description,
        price:price
    })
    await newMilkTea.save()
}

const postDataPasta = async (req, res) => {
    const { foodName, images, description, price } = req.body
    const newDataPasta = new Pasta({
        foodName:foodName,
        images:images,
        description:description,
        price:price
    })
    await newDataPasta.save()
}
const postDataPorridge = async (req, res) => {
    const { foodName, images, description, price } = req.body
    const newDataPorridge = new Porridge({
        foodName:foodName,
        images:images,
        description:description,
        price:price
    })
    await newDataPorridge.save()
}

module.exports = {
    getDataPizza,getDataFriedChicken, getDataFriedRice, getDataMilkTea, getDataPasta, getDataPorridge,
    postDataPizza, postDataFriedChicken, postDataMilkTea, postDataFriedRice, postDataPasta, postDataPorridge
}