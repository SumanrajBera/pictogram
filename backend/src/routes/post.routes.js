const express = require("express")
const multer = require('multer')
const postController = require('../controllers/post.controller')
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
 * @route POST /api/post/:id/like
 */

postRouter.post("/:id/like", identifyUser, postController.likePostController)

/**
 * @route DELETE /api/post/:id/like
 */
postRouter.delete("/:id/like", identifyUser, postController.unlikePostController)

/**
 * @route POST /api/post/:id/comment
 */
postRouter.post("/:id/comment", identifyUser, postController.commentController)

module.exports = postRouter