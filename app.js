const express = require('express');
const mongoose = require('mongoose');
// URI=mongodb://127.0.0.1:27017/Nefli
// URI=mongodb+srv://admin:admin@cluster0.rdo9y.mongodb.net/Netflix?retryWrites=true&w=majority
const bodyParser = require('body-parser');
require('dotenv/config');

const homeRouter = require('./routes/home-router');
const moviesRouter = require('./routes/movies-router');

// App
const app = express();
const PORT = 3000;

// Connect to DB
const db = mongoose.connect(
    process.env.URI, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => console.log('mongoDB connected')
);

// MIDDLEWARES
app.use(bodyParser.json());
app.use('/', homeRouter);
app.use('/movies', moviesRouter);

//Start listening
app.listen(PORT);

module.exports = db;
