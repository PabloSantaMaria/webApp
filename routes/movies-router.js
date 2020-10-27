const express = require('express');
const Movie = require('../models/movies-model');
const router = express.Router();

// Get all movie titles
router.get('/', async (req, res) => {
    try {
        const movieTitles = await Movie.find({}, {title: 1, _id: 0});
        res.json(movieTitles);
    } 
    catch (error) {
        console.error(error);
    }
});

// Get a specific movie
router.get('/:movieId', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        res.json(movie);
    } catch (error) {
        console.error(error);
    }
});

// Add a movie
router.post('/insert', async (req, res) => {

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

    try {
        const savedMovie = await movie.save();
        res.json(savedMovie);
    } 
    catch (error) {
        console.error(error);
    }

});

module.exports = router;
