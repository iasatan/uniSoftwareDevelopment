const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;

const db = require('./api/db/db');

const app = express();

app.listen(port, () => {
    console.log('Server is running on ' + port + ".");
});

app.get('/users', (req, res) => {
    let getUsers = 'select * from user';
    let create = 'create table user(uid int primary key auto_increment, name varchar(100) not null, email varchar(50) not null, password varchar(100) not null, gender enum("m","f", "o") not null, address varchar(100), typeOfResidence enum("flat", "detached house", "cottage", "mansion","dormitory"))';
    let postData = 'INSERT INTO user (uid, name, email, password, gender, address, typeOfResidence) VALUES (NULL, "Fanni", "goz@uni-miskolc.hu", "pW1o2V", "f", "Miskolc", "flat")';
    db.query(getUsers, (err, result) => {
        if(err) {
            
            db.query(create);
            console.log(err);
            db.query(postData);
            //return res.status(400).send();
        }

        if(result == null) {
            
            //console.log(result);
            //return res.status(400).send();
        }

        return res.send(result);
    });
})



app.use(express.static(path.join(__dirname, 'public')));