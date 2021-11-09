const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;

const db = require('./api/db/db');
const user = require('./api/user');
const music = require('./api/music');

const app = express();

app.use(express.json());

app.use(user);
app.use(music);

app.listen(port, () => {
    console.log('Server is running on ' + port + ".");
});

app.use(express.static(path.join(__dirname, 'public')));