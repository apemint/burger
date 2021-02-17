//import express/burger.js

const burger = require("../models/burger.js");
const express = require("express");
const app = express.Router();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

//get all
app.get("/api/burger", function (req, res) {
    burger.all(function (data) {
        res.json({ burgers: data });
    });
});

//post
app.post("/api/create", function (req, res) {
    burger.insert([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {

        res.json(result);
    });
});

//updates to 'devoured'
app.put("/api/devour/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.json({ id: req.params.id });
        }
    });
});

//delete
app.delete("/delete/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//export 
module.exports = app;