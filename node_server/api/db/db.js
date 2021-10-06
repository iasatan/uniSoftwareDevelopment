const mysql = require('mysql-await');
const settings = require('./dbsettings.json');

var db;

function connectDatabase() {
    if(!db) {
        db = mysql.createPool(settings);

        db.on('error', function(err) {
            console.log(err);
            db = null;
            connectDatabase();
        })
    }

    return db;
}

module.exports = connectDatabase();