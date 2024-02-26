require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const authRoute = require("./routes/auth");
const mongoose = require("mongoose")

const app = express();

app.use(cors())
app.use(express.json())



// app.use("/auth", authRoute);

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
	.then(() => app.listen(port, () => {
		console.log(`Server is running at port ${port}`);
	}))
	.catch(err => {
		console.log(err)
	})

