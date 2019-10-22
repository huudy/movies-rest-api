const request = require('supertest')
const app = require('../app')
const Comment = require('../models/comment')
const {
    commentOne,
    commentTwo,
    commentThree,
    setupDatabase
} = require('./setupDb')

beforeEach(setupDatabase)

test('Should create comment', async () => {
    const response = await request(app)
        .post('/comments')
        .send({
            author: 'Frank',
            text: 'blablablablab'
        })
        .expect(201)
    const comment = await Comment.findById(response.body._id)
    expect(comment).not.toBeNull()
    expect(comment.text).not.toBeNull()
})

test('Should fetch all comments', async () => {
    const response = await request(app)
        .get('/comments')
        .send()
        .expect(200)
    expect(response.body.length).toEqual(3)
})

// test('Should not delete other users comments', async () => {
//     const response = await request(app)
//         .delete(`/comments/${commentOne._id}`)
//         .send()
//         .expect(404)
//     const comment = await comment.findById(commentOne._id)
//     expect(comment).not.toBeNull()
// })