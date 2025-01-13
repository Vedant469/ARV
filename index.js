const express = require('express');
const app = express();
const mysql = require('mysql');
const exceljs = require('exceljs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

const excelFilePath = '"C:\Users\vedan\OneDrive\Desktop\ARV\data\data.xlsx"';

app.post('/contact/data/excel', (req, res) => {
    const data = req.body;
    const query = 'INSERT INTO contact_data SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send({ message: 'Error inserting data' });
        } else {
            console.log('Data inserted successfully:', results);
            res.send({ message: 'Data inserted successfully' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});