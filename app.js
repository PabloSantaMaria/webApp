const express = require('express');

//mongoose
const mongoose = require('mongoose');
//vanilla MongoDB
// const {MongoClient} = require('mongodb');

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

// vanilla MongoDB
// const client = new MongoClient(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true});
// client.connect();

// MIDDLEWARES
app.use(bodyParser.json());
app.use('/', homeRouter);
app.use('/movies', moviesRouter);

//Start listening
app.listen(PORT);
