const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("./models/user")

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"],
        },
        (accessToken, refreshToken, profile, done) => {
            // check if user already exists in our own db
            User.findOne({ googleId: profile.id }).then((currentUser) => {
                if (currentUser) {
                    // already have this user
                    console.log('user is: ', currentUser);
                    const token = 123;
                    done(null, currentUser, token);
                } else {
                    // if not, create user in our db
                    new User({
                        googleId: profile.id,
                        username: profile.displayName,
                        thumbnail: profile._json.image.url
                    }).save().then((newUser) => {
                        console.log('created new user: ', newUser);
                        done(null, newUser);
                    });
                }
            });
        }

    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
