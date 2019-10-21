const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, 'Author name required'],
        maxlength: [15, 'Please provide shorter name (up to 15 characters)!']
    },
    text: {
        type: String,
        required: [true, 'No empty comments allowed!'],
        maxlength: [200, 'The limit for comments is only 200 characters']
    },
    createdAt: {
        type: Date
    },
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    }
})
commentSchema.pre('save', function (next) {
    let comment = this;
    comment.createdAt = new Date()
    next()
})
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;