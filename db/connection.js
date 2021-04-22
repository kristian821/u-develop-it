const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mySQL UserName
        user: 'root',
        // Your mySQL password
        password: 'JhrCiGFw4FUg',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;