const express = require('express');

let app = express();

const port = process.env.PORT || 8887;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view')


const home = require('./routes/home');
app.use('/', home);

const login = require('./routes/login');
app.use('/login', login);

const group = require('./routes/group');
app.use('/group', group);

const add = require('./routes/addform');
app.use('/add', add);


app.listen(port, () => {
    console.log("Server readt at"+ port)
});
