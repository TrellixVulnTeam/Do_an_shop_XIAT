const { Chicken, Dumplings, Pizza, Sushi, Pancakes, Hamburger,
    Noodle, Salad, Cupcakes
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
    Pancakes.find({}, (err, result) => {
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
    Cupcakes.find({}, (err, result) => {
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
//

const getDataChicken= async(req,res)=>
{
    Chicken.find({}, (err, result) => {
        if (err) console.log(err)
        res.json({ data: result })
    })
}
const getDataNoodle= async(req,res)=>
{
    Noodle.find({}, (err, result) => {
        if (err) console.log(err)
        res.json({ data: result })
    })
}
const getDataSalad= async(req,res)=>
{
    Salad.find({}, (err, result) => {
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
    getDataCupcake,
    getDataChicken,
    getDataNoodle,
    getDataSalad
}