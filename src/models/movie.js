const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
    },
    rated: {
        type: String,
    },
    released: {
        type: String,
    },
    runtime: {
        type: String,
    },
    genre: {
        type: String,
    },
    director: {
        type: String,
    },
    writer: {
        type: String,
    },
    actors: {
        type: String,
    },
    plot: {
        type: String,
    },
    language: {
        type: String,
    },
    country: {
        type: String,
    },
    awards: {
        type: String,
    },
    poster: {
        type: String,
    },
    metascore: {
        type: String,
    },
    imdbRating: {
        type: String,
    },
    runtime: {
        type: String,
    },
    imdbRating: {
        type: String,
    },
    imdbVotes: {
        type: String,
    },
    imdbID: {
        type: String,
    },
    type: {
        type: String,
    },
    dvd: {
        type: String,
    },
    boxOffice: {
        type: String,
    },
    production: {
        type: String,
    },
    website: {
        type: String,
    },
    ratings: [{
        source: {
            type: String
        },
        value: {
            type: String
        }
    }]
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;