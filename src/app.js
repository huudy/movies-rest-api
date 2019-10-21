const express = require('express')
require('./db/mongoose')
const movieRouter = require('./routers/movie')
const commentRouter = require('./routers/comment')

const app = express()

app.use(express.json())
app.use(movieRouter)
app.use(commentRouter)

module.exports = app