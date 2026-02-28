const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, "Comment is required"]
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: [true, "Post is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    }
}, {
    timestamps: true
})

commentSchema.index({ post: 1, createdAt: -1 })

const commentModel = mongoose.model("Comment", commentSchema)

module.exports = commentModel