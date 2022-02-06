const { Chicken, Dumplings, Pizza, Sushi, Pancake, Hamburger,
    Noodle, Salad, Cupcakes, Spaghetti, Pasta, Steak, Fries, Sandwich
} = require('../models/DataProductSchema')


const getDataPizza = async(req,res)=>
{
    Pizza.find({}, (err, result) => {
        if (err) console.log(err)
        res.json({ data: result })
    })
}
const getDataSushi = async(req,res)=>
{
    Sushi.find({}, (err, result) => {
        if (err) console.log(err)
        res.json({ data: result })
    })
}
const getDataPancake= async(req,res)=>
{
    Pancake.find({}, (err, result) => {
        if (err) console.log(err)
        res.json({ data: result })
    })
}
const getDataHamburger= async(req,res)=>
{
    Hamburger.find({}, (err, result) => {
        if (err) console.log(err)
        res.json({ data: result })
    })
}
const getDataCupcake= async(req,res)=>
{
    Cupcake.find({}, (err, result) => {
        if (err) console.log(err)
        res.json({ data: result })
    })
}
const getDataDumplings= async(req,res)=>
{
    Dumplings.find({}, (err, result) => {
        if (err) console.log(err)
        res.json({ data: result })
    })
}

module.exports = {
    getDataPizza,
    getDataSushi,
    getDataPancake,
    getDataHamburger,
    getDataDumplings,
    getDataCupcake
}