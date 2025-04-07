const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "192.250.229.116",
  user: "ametrajx_userForums",
  password: process.env.DB_PASSWORD,
  database: "ametrajx_forums",
  
});

module.exports = db.promise();
