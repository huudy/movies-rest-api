const request = require('supertest')
const app = require('../app')
const Movie = require('../models/movie')
const {
    movieOne,
    movieTwo,
    setupDatabase
} = require('./setupDb')

beforeEach(setupDatabase)

test('Should create movie with details', async () => {
    const response = await request(app)
        .post('/movies')
        .send({
            title: 'toy story'
        })
        .expect(201)
    const movie = await Movie.findById(response.body._id)
    expect(movie).not.toBeNull()
    expect(movie).toBeTruthy()
})

test('Should fetch all movies', async () => {
    const response = await request(app)
        .get('/movies')
        .send()
        .expect(200)
    expect(response.body.length).toEqual(2)
})

test('Should delete one movie', async () => {
    const response = await request(app)
        .delete(`/movies/${movieOne._id}`)
        .send()
        .expect(200)
    const movie = await Movie.findById(movieOne._id)
    expect(movie).toBeNull()
})