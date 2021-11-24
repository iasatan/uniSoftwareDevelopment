const express = require('express');
//const cors = require('cors');
const path = require('path');
const cors = require("cors");

const port = process.env.PORT || 8080;

const db = require('./api/db/db');
const user = require('./api/user');
const music = require('./api/music');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
});
//app.use(cors);
app.use(user);
app.use(music);

app.listen(port, () => {
    console.log('Server is running on ' + port + ".");
});

app.use(express.static(path.join(__dirname, 'public')));