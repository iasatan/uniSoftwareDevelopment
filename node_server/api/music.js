const express = require('express');
const router = express.Router();
const db = require('./db/db');

router.get('/music', (req, res) => {
    let type = Object.keys(req.query).toString();
    let value = Object.values(req.query).toString();

    let getMusicQuery = 'select artist, title from music where ' + type + '=\'' + value + '\'';

    db.query(getMusicQuery, (err, result) => {
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
});

module.exports = router;