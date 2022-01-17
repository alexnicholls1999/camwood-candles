const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();

const index = __dirname+ '/public/index.html'

app.get('/', (req, res) => {
    res.sendFile(path.join(index));
})

app.use('/', router);
app.use('/src', express.static('src'));
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
