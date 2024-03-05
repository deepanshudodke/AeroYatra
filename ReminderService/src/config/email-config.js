const nodemailer = require("nodemailer");

const userId = "toonknight20103@gmail.com";
const password = "";

const sender = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: userId,
        pass: password
    }
});

module.exports = sender;
