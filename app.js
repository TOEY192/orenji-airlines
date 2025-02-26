// npm import mysql2 express
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

// สร้างการเชื่อมต่อกับ MySQL
const connection = mysql.createConnection({
    host: 'localhost',  // หรือที่อยู่ของ MySQL Server หรือ IP ของเครื่องที่รัน MySQL 192.168.1.102
    user: 'jirayu',       // ชื่อผู้ใช้
    password: 'jirayu13', // รหัสผ่าน
    database: 'db_flightbooking' // ชื่อฐานข้อมูล
});

// เชื่อมต่อกับฐานข้อมูล
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get("/users", (req, res) => {
    connection.query("SELECT * FROM Users", (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});