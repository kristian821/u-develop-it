const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
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

// Default response for any other request(Not Found)
app.get((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});