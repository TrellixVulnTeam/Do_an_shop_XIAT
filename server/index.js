const express = require("express")
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

//Connect to mongoose
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const { DBconnect }= require("./config/dbConnect")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
DBconnect()


//API
const authAPI = require("./apis/authAPI")
app.use("/api/auth", authAPI)
const dataAPI = require("./apis/dataAPI")
app.use("/api/private", dataAPI)

app.listen(process.env.PORT, console.log(`Server dang chay tren cong ${process.env.PORT}`))
