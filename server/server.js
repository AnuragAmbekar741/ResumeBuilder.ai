require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const authRoute = require("./routes/auth");
const connectToDb = require("./db/index");
const app = express();

app.use(cors())
app.use(express.json())

connectToDb()




