const express = require('express')
const followRouter = express.Router()
const identifyUser = require("../middlewares/identifyUser")
const followController = require("../controllers/follow.controller")

/**
 * @route POST /api/users/:id/follow
 */
followRouter.post("/:id/follow", identifyUser, followController.followUserController)

/**
 * @route DELETE /api/users/:id/unfollow
 */
followRouter.post("/:id/unfollow", identifyUser, followController.unfollowUserController)

/**
 * @route GET /api/users/followers
 */
followRouter.get("/followers", identifyUser, followController.getFollowersController)

/**
 * @route GET /api/users/following
 */
followRouter.get("/following", identifyUser, followController.getFollowingController)

module.exports = followRouter