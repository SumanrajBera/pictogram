const followModel = require('../models/follows.model')
const userModel = require('../models/users.model')

async function followUserController(req, res) {
    const follower = req.user.id
    const followee = req.params.id

    if (follower === followee) {
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }

    const isFolloweeExist = await userModel.exists({ _id: followee })

    if (!isFolloweeExist) {
        return res.status(404).json({
            message: "User doesn't exist"
        })
    }

    try {
        await followModel.create({
            follower,
            followee
        })

        res.status(201).json({
            message: `User followed successfully`
        })
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({
                message: "You are already following the user"
            })
        }
    }
}

async function unfollowUserController(req, res) {
    const follower = req.user.id
    const followee = req.params.id

    if (follower === followee) {
        return res.status(400).json({
            message: "You cannot unfollow yourself"
        })
    }

    let deleted = await followModel.findOneAndDelete({
        followee, follower
    })

    if (!deleted) {
        return res.status(400).json({
            message: "You're not following the user"
        })
    }

    res.status(200).json({
        message: "You have unfollowed the user"
    })
}

async function getFollowersController(req, res) {
    const user = req.user.id;

    const followers = await followModel.find({ followee: user }).populate("follower", "username profileImg")

    return res.status(200).json({
        message: "Followers fetched successfully",
        followers: followers.map(f => f.follower)
    })
}

async function getFollowingController(req, res) {
    const user = req.user.id;

    const following = await followModel.find({ follower: user }).populate("followee", "username profileImg")

    return res.status(200).json({
        message: "Following fetched successfully",
        following: following.map(f => f.followee)
    })
}

module.exports = {
    followUserController,
    unfollowUserController,
    getFollowersController,
    getFollowingController
}