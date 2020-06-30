const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
// expiress middleware:body-parser that wires up with app.use
// operates on incoming requests before they are sent to the request handlers
const bodyParser = require("body-parser");
require("./models/User");
require('./models/Survey');
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
// generates a new application that express a running app

// MIDDLEWARES

// post,put or patch request comes in, this middleware will parse the body and assign it to req.body prop of incoming request object
app.use(bodyParser.json());
app.use(
    cookieSession({
        // how long the cookie will stay in broswer before it automatically expires
        //  passed in milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);

// instances of middleware
app.use(passport.initialize());
app.use(passport.session());

// returns an function, immediately call the function we passed in i.e app
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if(process.env.NODE_ENV==='production'){
    // express will serve up production assests like main.js file or main.css file
    app.use(express.static('client/build'));
    //express will serve index.html file if it doesn't recognizes the route 
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

// heroku has ability of injecting env variables
// process.env.. by heroku in production env, for deployment i.e 5000

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// req.session: data that passport stores in the cookie
