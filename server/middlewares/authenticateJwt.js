const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const Secret = process.env.SECRET_KEY

const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.verify(token, Secret, (user, error) => {
            if (error) return res.sendStatus(403)
            req.user = user
            next()
        })
    } else {
        res.sendStatus(401)
    }
}

module.exports = {
    authenticateJwt
}