//set up code to connect node to mysql, export the connection

let mysql = require("mysql");

var connection;

if (process.env.JAWSBD_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user:"root",
        password:"password",
        database: "burgers_db",
    });

}

connection.connect();

module.exports = connection;