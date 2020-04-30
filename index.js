const express = require('express');
const mongoose=require('mongoose')
const cookieSession=require('cookie-session')
const passport=require('passport')
const keys=require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI);

const app = express();
// generates a new application that express a running app

app.use(
    cookieSession({
        // how long the cookie will stay in broswer before it automatically expires
        //  passed in milliseconds
        maxAge: 30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

// returns an function, immediately call the function we passed in
require('./routes/authRoutes')(app);

// heroku has ability of injecting env variables
// process.env.. by heroku in production env, for deployment i.e 5000

const PORT = process.env.PORT || 5000;
app.listen(PORT);


// req.session: data that passport stores in the cookie