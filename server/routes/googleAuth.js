const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const googleMiddleWare = (req, res, next) => {

}

router.get("/login/success", authenticateGoogle, (req, res) => {
    if (req.user) {
        const token = jwt.sign({ email: req.user.email, role: 'User' }, process.env.SECRET_KEY, { expiresIn: '1h' })
        console.log(req.user)
        res.status(200).json({
            error: false,
            message: "Successfully Loged In",
            user: { ...req.user, token: token },
            token: token
        });
    } else {
        res.status(403).json({ error: true, message: "Not Authorized" });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));



router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: `${process.env.CLIENT_URL}/home`,
        failureRedirect: "/login/failed",
    })
);


router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
