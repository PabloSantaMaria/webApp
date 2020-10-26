const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    rating: Number,
    genre: String,
    description: String,
    actors: Array,
    country: String,
    income: Number,
    duration: Number
});

module.exports = mongoose.model('Movie', MovieSchema);
