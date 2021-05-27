const express = require('express');
const { add_book }= require('../json/add_book.json');
const { add_author }= require('../json/add_author.json');

let app = express.Router();

app.get('/add_book', function (req, res) {
    res.render('addform', { data:add_book });
});

app.get('/add_author', function (req, res) {
    res.render('addform', { data:add_author } );
});

module.exports = app;