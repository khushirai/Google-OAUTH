// production keys here
module.exports={
    googleClientID:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookieKey:process.env.COOKIE_KEY,
    stripePublishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey:process.env.STRIPE_SECRET_KEY
};

// we won't use it for front end
// bcoz if we require this file to client side application
// all the keys will be visible to outside world