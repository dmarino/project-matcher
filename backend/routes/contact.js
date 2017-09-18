const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/', function(req, res)
{
  var transporter = nodemailer.createTransport({
    service : 'Gmail',
    auth: {
      user: 'projectsharingmanager@gmail.com', // Your email id
      pass: 'timbalarci1' // Your password
  }
  });

var mailOptions = {
  from: 'projectsharingmanager@gmail.com>', // sender address
  to: 'juan_arciniegas13@hotmail.com',
  subject: 'Interesado en el Proyecto', // Subject line
  text: 'My name is:' +req.body.name +"I want to talk about "+req.body.comment + "pelase contact me at"+ req.body.email
};

  trasnporter.sendMail(mailOptions,function(error,info)
  {
   if(error)
    {
      console.log(error);
      res.redirect('/');
    } 
    else{
      console.log('Message:'+info.response);
      res.redirect('/');
    }
  });
});



module.exports = router;