const express = require("express")
require('dotenv').config();

const Port = process.env.PORT
const app = express()

app.use(express.json())

app.listen(Port, () => console.log(`Running on port ${Port}`))