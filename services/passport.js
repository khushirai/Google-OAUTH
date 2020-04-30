const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose=require('mongoose')
const keys = require("../config/keys");

const User=mongoose.model('users')

// user is whatever we pulled out of the database
// passport will eventually stuff it into a cookie 
passport.serializeUser((user,done)=>{
    done(null,user.id);
});

// take the cookie or id and turn it back into actual mongoose user model
passport.deserializeUser((id,done)=>{
    User.findById(id)
    .then(user=>{
        done(null,user)
    });
}); 

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId:profile.id})
            .then((existingUser)=>{
                if(existingUser){
                    // we already have a record with given profile ID
                    // null indicates we have not found any kind of error
                    done(null,existingUser);
                }else{
                    // we don't have a user record with this ID, make a new record

                    //    profile.id is coming from user's google profile
        // save will save into the database
            new User({googleId:profile.id}).save()
            .then(user=> done(null,user));
                }
            })
        
        }
    )
);
// creates a new instacnce of google strat