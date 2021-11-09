const express = require('express');
const router = express.Router();
const db = require('./db/db');

router.get('/music', (req, res) => {
    let getMusicQuery = 'select * from music';

    const filterObject = {
        artist: { value: req.query.artist, type: "string" },
        album: { value: req.query.album, type: "string" },
        title: { value: req.query.title, type: "string" },
        pubYear: { value: req.query.year, type: "int" },
        playtime: { value: req.query.playtime, type: "int" },
        genre: { value: req.query.playtime, type: "int" },
    }

    const queryFilters = []

    for (const [name, filter] of Object.entries(filterObject)) {
        if(filter.value === null || filter.value == undefined) {
            continue;
        }

        if(filter.type == "string") {
            queryFilters.push(`${name} like "%${filter.value}%"`);
        } else if(filter.type == "int") {
            queryFilters.push(`${name} = "${filter.value}"`);
        }
    }

    queryFilters.forEach((filter, index) => {
        if(index == 0) {
            getMusicQuery += ` where ${filter}`;
        } else {
            getMusicQuery += ` and ${filter}`;
        }
    });
    
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