const express = require("express")
const multer  = require('multer')
const postController = require('../controllers/post.controllers')
const identifyUser = require("../middlewares/identifyUser")

const postRouter = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

/**
 * @route POST /api/post/create
 */
postRouter.post("/create", identifyUser, upload.single("image") ,postController.createPostController)

module.exports = postRouter