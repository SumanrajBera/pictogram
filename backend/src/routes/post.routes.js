const express = require("express")
const multer = require('multer')
const postController = require('../controllers/post.controllers')
const identifyUser = require("../middlewares/identifyUser")

const postRouter = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

/**
 * @route POST /api/post/create
 */
postRouter.post("/create", identifyUser, upload.single("image"), postController.createPostController)

/**
 * @route GET /api/post/feed
 */
postRouter.get("/feed", identifyUser, postController.getFeedController)

/**
 * @route POST /api/post/like/:id
 */

postRouter.post("/:id/like", identifyUser, postController.likePostController)

/**
 * @route DELETE /api/post/like/:id
 */
postRouter.delete("/:id/like", identifyUser, postController.unlikePostController)

module.exports = postRouter