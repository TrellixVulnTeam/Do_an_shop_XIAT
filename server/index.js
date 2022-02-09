const express = require("express");
const app = express();
app.use(express.json());

//Using cors policy for brower
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Using environmental variables
const dotenv = require("dotenv");
dotenv.config();

//API
const authAPI = require("./apis/authAPI");
app.use("/api/auth", authAPI);
const dataAPI = require("./apis/dataAPI");
app.use("/api/private", dataAPI);

app.listen(
  process.env.PORT,
  console.log(`Server is running ${process.env.PORT}`)
);
