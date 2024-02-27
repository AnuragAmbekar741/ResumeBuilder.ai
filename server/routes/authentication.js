const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const { User } = require("../models/user")

const router = express.Router()

const SECRET_KEY = process.env.SECRET_KEY

router.post("/signup", async (req, resp) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (user) return resp.json({ message: "User already exits" })
    if (!user) {
        newUserObj = { email: email, password: password }
        newUser = new User(newUserObj)
        newUser.save()
        const token = jwt.sign({ email, role: 'User' }, SECRET_KEY, { expiresIn: '1h' })
        resp.json({ message: "User created successfully", token })
    }
})

module.exports = router