const express = require('express');

let app = express.Router();

app.get('/', function (req, res) {
    console.log(req.path)

    res.render("index", { role: req.session.role });
});

module.exports = app;