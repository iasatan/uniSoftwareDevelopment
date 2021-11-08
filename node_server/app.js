const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;

const db = require('./api/db/db');
const user = require('./api/user');

const app = express();

app.use(express.json());
app.use(user);
app.listen(port, () => {
    console.log('Server is running on ' + port + ".");
});

app.get('/users', (req, res) => {
    let getUsers = 'select * from user';
    db.query(getUsers, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).send();
        }

        if (result == null) {
            console.log(result);
            return res.status(400).send();
        }

        return res.send(result);
    });
})

app.use(express.static(path.join(__dirname, 'public')));