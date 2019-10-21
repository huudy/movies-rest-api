const express = require('express')
const Movie = require('../models/movie')
const router = new express.Router()

router.post('/movies', async (req, res) => {
    const movie = new Movie(req.body)
    console.log(movie);

    try {
        await movie.save()
        res.status(201).send(movie)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.send(movies)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router