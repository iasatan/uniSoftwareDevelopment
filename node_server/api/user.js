const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const db = require('./db/db');

const JWT_KEY = "naGyonBonyolultÉsHosszúKulcs"

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
});

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

});

router.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const getUserQuery = `select * from user where email = "${email}"`;

    db.query(getUserQuery, (err, userResult) => {
        if (err) {
            console.log(err);

            return res.status(400).json({errors: ["Failed to find email address."]}).send();
        }

        if (userResult == null || userResult.length == 0) {
            console.log(userResult);

            return res.status(400).json({
                errors: ["Email address does not exists in our database."]
            }).send();
        }

        const foundUser = userResult[0];

        bcrypt.compare(password, foundUser.password, function(err, passResult) {
            if(err || !passResult) {
                return res.status(400).json({
                    errors: ["Incorrect password."]
                }).send();
            }

            const user = {
                id: foundUser.id,
                email: foundUser.email,
                name: foundUser.name,
                role: foundUser.role,
                gender: foundUser.gender,
                address: foundUser.address,
                typeOfResidence: foundUser.typeOfResidence
            }

            const token = jwt.sign(user, JWT_KEY);

            return res.status(200).json({
                token,
                user
            });
        });
    });
});

module.exports = router;