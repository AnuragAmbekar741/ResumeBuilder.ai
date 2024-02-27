const mongoose = require("mongoose")
const express = require("express")
require("dotenv").config()

const app = express()

const port = process.env.PORT || 8080;

const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
        .then(() => app.listen(port, () => {
            console.log(`Server is running at port ${port}`);
        }))
        .catch(err => {
            console.log(err)
        })
}

module.exports = connectToDb 