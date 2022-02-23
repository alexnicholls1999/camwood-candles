const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const router = express.Router();
const nodemailer = require("nodemailer");

dotenv.config();

const index = __dirname + "/public/index.html";
const notFound = __dirname + "/public/404.html";
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("public"));
app.use("/", router);
app.use("/src", express.static("src"));
app.listen(port, "0.0.0.0");

app.get("/", (req, res) => {
  res.sendFile(path.join(index));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(notFound));
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
    port: 465,
    secure: true,
    auth: {
      user: "mailertest1999@gmail.com",
      pass: "test1234!",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "mailertest1999@gmail.com",
    cc: "azini@live.co.uk",
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
