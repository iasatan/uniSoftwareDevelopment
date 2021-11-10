const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('./db/db');

router.get('/users', (req, res) => {
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
router.post('/signup', (req, res) => {
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    let existsUserQuery = "select * from user where LOWER(email) = (" + user.email + ");";
    db.query(existsUserQuery, (err, result) => {
        if (result != null) {
            return res.status(409).send({msg: "Ez az email már foglalt"});
        } else {
            bcrypt.hash(user.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({msg: err});
                    } else {
                        let insertUserQuery = "INSERT INTO user (email, name, password) VALUES ('" + user.email + "','" + user.name + "','" + hash + "');"
                        db.query(insertUserQuery, (err, result) => {
                            if (err) {
                                return res.status(400).send({msg: err});
                            }
                            return res.status(201).send({msg: "Sikeres regisztráció"});
                        })
                    }
                }
            )
        }
    })

})

module.exports = router;