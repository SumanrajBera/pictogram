const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Follower is required"]
    },
    followee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Follower is required"]
    }
}, {
    timestamps: true
})

followSchema.index({ follower: 1, followee: 1 }, { unique: true })
followSchema.index({ follower: 1 })
followSchema.index({ followee: 1 })

const followModel = mongoose.model("Follow", followSchema)

module.exports = followModel