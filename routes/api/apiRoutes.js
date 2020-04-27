const router = require("express").Router();
let nodeMailer = require("nodemailer");
require('dotenv').config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

router.route("/")
    .post(function (req, res) {
        console.log(req.body);
        let transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });
        let mailOptions = {
            from: EMAIL,
            to: EMAIL,
            subject: req.body.fullName,
            text: req.body.email + " : " + req.body.message
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log("Message has been sent: ", info.messageId, info.response);
        });
        res.status(200);
        res.json();
    });

module.exports = router;