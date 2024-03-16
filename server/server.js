require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authentication = require("./routes/authentication");
// const googleAuth = require("./routes/googleAuth")
const mongoose = require("mongoose")
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");

const app = express();

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(
	cors({
		origin: "http://localhost:5173",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);
app.use('/user', authentication)
// app.use('/auth', googleAuth)

const port = process.env.PORT || 8080;
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
	.then(() => app.listen(port, () => {
		console.log(`Server is running at port ${port}`);
	}))
	.catch(err => {
		console.log(err)
	})



