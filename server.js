const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on : http://localhost:" + PORT);
});