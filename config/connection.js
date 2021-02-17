//set up code to connect node to mysql, export the connection

let sql = require("mysql");

var connection;

if (process.env.JAWSBD_URL) {
    connection = sql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = sql.createConnection({
        host:"localhost",
        port:3306,
        user:"root",
        password:"password",
        database: "burgers_db",
    });

}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting" + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;