const express = require('express');
const Movie = require('../models/movies-model');
const router = express.Router();

router.get('/', (req, res) => (
    Movie.find({}, (err, docs) => res.json(docs))
));

router.get('/specific', (req, res) => (
    res.send('specific movie')
));

router.post('/', (req, res) => {

    const {title, year, rating, genre, description, actors, country, income, duration} = req.body;

    const movie = new Movie({
        title: title,
        year: year,
        rating: rating,
        genre: genre,
        description: description,
        actors: actors,
        country: country,
        income: income,
        duration: duration
    });

    movie.save((err, movie) => {
        if (err) return console.error(err);
        res.json(movie);
    });

});

module.exports = router;
