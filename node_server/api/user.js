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
router.get('/users/:uid', (req, res) => {
    let getUsersId = 'select * from user where uid = ' + req.params.uid + ';';
    db.query(getUsersId, (err, result) => {
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

router.delete('/users/:uid',(req, res)=>{
    let deleteUser = 'delete from user where uid = ' + req.params.uid + ';';
    db.query(deleteUser, (err, result)=>{
        if (err) {
            console.log(err);
            return res.status(400).send();
        }

        if (result == null) {
            console.log(result);
            return res.status(400).send();
        }

        return res.send(result);

    })
})

router.put('/users/:uid', (req, res) => {
    let user = {
        //uid: req.body.uid,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        address:req.body.address,
        typeOfResidence: req.body.typeOfResidence,
    };
    let updateUser = "UPDATE user SET name='"+user.name +"',email='"+user.email+"', password='"+user.password+"',gender='"+user.gender+"',address='"+user.address+"',typeOfResidence='"+user.typeOfResidence+"' WHERE uid = '" + req.params.uid + "';";
    db.query(updateUser, (err, result) => {
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

module.exports = router;