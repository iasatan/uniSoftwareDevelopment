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

router.post('/addMusic', (req, res) => {
    let music = {
        filename: req.body.filename,
        artist: req.body.artist,
        title: req.body.title,
        album: req.body.album,
        comment: req.body.comment,
        track: req.body.track,
        year: req.body.year,
        genre: req.body.genre,
        path: req.body.path,
        filesize: req.body.filesize,
        copyright: req.body.copyright,
        layer: req.body.layer,
        stereo: req.body.stereo,
        goodframes: req.body.goodframes,
        badframes: req.body.badframes,
        frequency: req.body.frequency,
        playtime: req.body.playtime
    };
    let existsMusicQuery = "select * from music where LOWER(artist) = (" + music.artist + ") and LOWER(title) = (" + music.title + ");";
    db.query(existsMusicQuery, (err, result) => {
        if (result != null) {
            return res.status(409).send({msg: "This music has already added to the DB."});
        } else {
            let insertMusicQuery = "INSERT  INTO music ( filename, artist, title, album, comment, track, year, genre, path, filesize, copyright, layer, stereo, goodframes, badframes, frequency, playtime) VALUES ('" + music.filename + "', '" + music.artist + "', '" + music.title + "', '" + music.album + "', '" + music.comment + "', '" + music.track + "', '" + music.year + "', '" + music.genre + "', '" + music.path + "', '" + music.filesize + "', '" + music.copyright + "', '" + music.layer + "', '" + music.stereo + "', '" + music.goodframes + "', '" + music.badframes + "', '" + music.frequency + "', '" + music.playtime + "');"
                        db.query(insertMusicQuery, (err, result) => {
                            if (err) {
                                return res.status(400).send({msg: err});
                            }
                            return res.status(201).send({msg: "Sikeres adatfelvitel."});
                        })
                    }
                }
            )

});

router.post('/deleteMusic/:mid', (req, res) => {
    let deleteMusicQuery = "delete from music where mid= " + req.params.mid + ";";

    db.query(deleteMusicQuery, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).send();
        }
        return res.send(result);
    });
});

module.exports = router;