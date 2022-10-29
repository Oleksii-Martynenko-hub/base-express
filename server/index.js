const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', usersRoutes);
app.use('/', authRoutes);
app.use((req, res, next) => res.status(404).send(['page not found']));

module.exports = app;
