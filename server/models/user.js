const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: false },
})

const USER = mongoose.model("User", userSchema)

module.exports = { USER }