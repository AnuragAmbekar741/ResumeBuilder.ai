
const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require("./routes/userRoute")
const { config } = require("dotenv")
config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", userRoutes)

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    }))
    .catch(err => {
        console.log(err)
    })