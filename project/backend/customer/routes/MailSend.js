const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "ggmatheesha2@gmail.com",
            pass: "hfvfckbopiugqxml",
        },
    }
);


function sendEmail(to, subject, msg) {
    transporter.sendMail(
        {
            to: to,
            subject: subject,
            html: msg,
        });

        console.log("Email sent successfully");
    
    }
    
    sendEmail("ggmatheesha2@gmail.com","This is subject","This is message");
