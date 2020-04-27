const express=require('express')
// node js doesnot support es2015 modules
// so we use common js modules

const app=express();
// geneerates a new application that express a running app

app.get('/',(req,res)=>{
    res.send({hi:'there'});
});

// heroku has ability of injecting env variables
// process.env.. by heroku in production env, for deployment i.e 5000
const PORT=process.env.PORT||5000
app.listen(PORT);