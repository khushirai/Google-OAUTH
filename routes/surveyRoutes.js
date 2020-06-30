const mongoose=require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer=require('../services/Mailer')
const surveyTemplate=require('../services/emailTemplates/surveyTemplate')
const Survey= mongoose.model('surveys');

module.exports = (app) => {
    app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
       const {title,subject,body,recipients}=req.body; 

       const survey=new Survey({
          title, subject, body,
          recipients:recipients.split(',').map(email=>({email:email.trim()})),
         //  automatically generated  by mongoose
          _user:req.user.id,
          dateSent:Date.now()
       });

      //  send an email now, after creating a survey
      const mailer=new Mailer(survey,surveyTemplate(survey));
      mailer.send();
      // first agrument survey contains subject,recipients property
    });
};
