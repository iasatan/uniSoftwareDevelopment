const express = require('express');
const router = express.Router();
const db = require('./db/db');

router.get('/api/music', (req, res) => {
    let getMusicQuery = 'select * from music';
    
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