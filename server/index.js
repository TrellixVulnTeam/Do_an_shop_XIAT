const express = require("express")
const app = express()
app.use(express.json())
//Ket noi toi mongoose

const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const { DBconnect }= require("./config/dbConnect")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
DBconnect()

//Su dung cors cho trinh duyet
const cors = require('cors')
app.use(cors())

//API
const authAPI = require("./apis/authAPI")
app.use("/api/auth", authAPI)
const dataAPI = require("./apis/dataAPI")
app.use("/api/private", dataAPI)

app.listen(process.env.PORT, console.log(`Server dang chay tren cong ${process.env.PORT}`))
