require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authentication = require("./routes/authentication");
const mongoose = require("mongoose")
const app = express();

app.use(express.json())
app.use(cors())
app.use('/user', authentication)

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
	.then(() => app.listen(port, () => {
		console.log(`Server is running at port ${port}`);
	}))
	.catch(err => {
		console.log(err)
	})



