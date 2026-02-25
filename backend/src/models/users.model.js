const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username must be unique"],
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: [true, "Email must be unique"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    profileImg: {
        type: String,
        default: "https://ik.imagekit.io/sxeq10eu8/defaultProfileImg.avif"
    },
    bio: {
        type: String,
        default: ""
    }
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel