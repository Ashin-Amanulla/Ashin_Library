const express = require('express');
const { books } = require('../json/books.json');
const { authors } = require('../json/authors.json');

let app = express.Router();

app.get('/books', function (req, res) {
    res.render('group', { data: books, header: 'BOOKS', search: 'book' });
});

app.get('/books:id', function (req, res) {
    let id = req.params.id;
    res.render('single', { data: books });
});

app.get('/authors', function (req, res) {
    res.render('group', { data: authors, header: 'AUTHORS', search: 'author' });
});

app.get('/authors/:id', function (req, res) {
    let id = req.params.id;
    res.render('single', { data: authors[id - 1] ,code:'0'});
});


app.get('/books/:id', function (req, res) {
    let id = req.params.id;

    res.render('single', { data: books[id - 1] ,code:'1'});
});

module.exports = app;