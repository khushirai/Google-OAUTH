const mongoose=require('mongoose');
const {Schema}=mongoose;
const RecipientSchema=require('./Recipient');

const surveySchema=new Schema({
    title:String,
    body:String,
    subject:String,
    // will be an array conating list of strings
    // sub document collection
    // bunch of little models called recipeints
    // recipient will have two properties:email(string), clicked(boolean)
    recipients:[RecipientSchema],
    yes:{type:Number, default:0},
    no:{type:Number, default:0},
    // every schmea will belong to a very particular user and type of..
    _user:{type:Schema.Types.ObjectId, ref:'User'},
    dateSent:Date,
    lastResponded:Date
});

mongoose.model('surveys',surveySchema);