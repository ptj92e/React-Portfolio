const router = require("express").Router();
let nodeMailer = require("nodemailer");

router.post("/send", function(req, res) {
    console.log(req.body);
    let transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "ptj92e@gmail.com",
            pass: "Trombone-9"
        }
    });
    let mailOptions = {
        to: "ptj92e@gmail.com",
        subject: req.body.email,
        body: req.body.fullName + " " + req.body.message
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err);
        }
        console.log("Message has been sent: ", info.messageId, info.response);
    });
    res.status(200);
    res.end();
});

module.exports = router;