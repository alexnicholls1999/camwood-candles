const express = require('express');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');

dotenv.config();

<<<<<<< HEAD:server.js
const index = __dirname + '/public/index.html';
const notFound = __dirname + '/public/404.html';

app.use(express.json());
app.use(express.static('public'));
app.use('/', router);
app.use('/src', express.static('src'));
app.listen(process.env.port || 3000);
=======
const index = __dirname + "/public/index.html";
const notFound = __dirname + "/public/404.html";
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("public"));
app.use("/", router);
app.use("/src", express.static("src"));
app.listen(port, "0.0.0.0");
>>>>>>> badc4c595c5347b0b363af281e39aa3006faae62:app.js

app.get('/', (req, res) => {
  res.sendFile(path.join(index));
});

<<<<<<< HEAD:server.js
app.get('*', (req, res) => {
=======



app.get("*", (req, res) => {
>>>>>>> badc4c595c5347b0b363af281e39aa3006faae62:app.js
  res.sendFile(path.join(notFound));
});

app.post('/', (req, res) => {
  console.log(req.body);
  const contactOutput = `
    <h1>Camwood Candles Contact Enquiry</h1>
    <p>Hi Carol</p>
    <p>${req.body.message}</p>
    <p>Regards <br> ${req.body.name} </p>
  `;
  
  const transporter = nodemailer.createTransport({
<<<<<<< HEAD:server.js
    service: 'gmail',
=======
    service: "gmail",
    port: 465,
    secure: true,
>>>>>>> badc4c595c5347b0b363af281e39aa3006faae62:app.js
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD
    },
<<<<<<< HEAD:server.js
    tls: {
      rejectUnauthorized: false
    }
=======
>>>>>>> badc4c595c5347b0b363af281e39aa3006faae62:app.js
  });

  const mailOptions = {
    from: req.body.email,
    to: 'mailertest1999@gmail.com',
    cc: 'azini@live.co.uk',
    subject: `Message from ${req.body.email}`,
    html: contactOutput
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
<<<<<<< HEAD:server.js
      console.log(error);
      res.send('error' + error);
=======
      res.send("error" + error);
>>>>>>> badc4c595c5347b0b363af281e39aa3006faae62:app.js
    } else {
      console.log(`Email sent: ` + info.response);
      res.send('success');
    }
  });
});
