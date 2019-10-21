const express = require('express')
const Comment = require('../models/comment')
const router = new express.Router()

router.post('/comments', async (req, res) => {
    const comment = new Comment(req.body)
    try {
        await comment.save()
        res.status(201).send(comment)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find({})
        res.send(comments)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router