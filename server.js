const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const nodemailer = require("nodemailer");

const index = __dirname + "/public/index.html";

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(index));
});

app.post("/", (req, res) => {
  console.log(req.body);
  const contactOutput = `
    <h1>Camwood Candles Contact Enquiry</h1>
    <p>Hi Carol</p>
    <p>${req.body.message}</p>
    <p>Regards <br> ${req.body.name} </p>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "mailertest1999@gmail.com, azini@live.co.uk",
    subject: `Message from ${req.body.email}`,
    html: contactOutput,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error" + error);
    } else {
      console.log(`Email sent: ` + info.response);
      res.send("success");
    }
  });
});

app.use("/", router);
app.use("/src", express.static("src"));
app.listen(process.env.port || 3000);
