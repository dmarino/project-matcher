const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const USER_EMAIL = process.env.USER_EMAIL;
if (!USER_EMAIL) {
    throw new Error('Must define USER_EMAIL env variable.');
}
const USER_PASSWORD = process.env.USER_PASSWORD;
if (!USER_PASSWORD) {
    throw new Error('Must define USER_PASSWORD env variable');
}

router.post('/', function (req, res) {
    console.log(req.body);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: USER_EMAIL,
            pass: USER_PASSWORD
        }
    });

    const mailOptions = {
        from: USER_EMAIL,
        to: req.body.toEmail,
        subject: `${req.body.name} sent you a message from Project Match`,
        text: `${req.body.name} wrote:\n${req.body.message} \nContact him at ${req.body.fromEmail}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw error;
        }
        res.json(info);
    });
});


module.exports = router;