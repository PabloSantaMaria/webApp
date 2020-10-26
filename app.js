const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const homeRouter = require('./routes/home-router');
const moviesRouter = require('./routes/movies-router');

// App
const app = express();
const PORT = 3000;

// Connect to DB
mongoose.connect(
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
