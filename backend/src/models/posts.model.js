const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: [true, "Image is required for posting"]
    },
    caption: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User info is required to post"]
    }
}, { timestamps: true })

postSchema.index({ user: 1, createdAt: -1 }); // For user based posts
postSchema.index({ createdAt: -1 }); // For feed based posts

const postModel = mongoose.model("Post", postSchema)

module.exports = postModel