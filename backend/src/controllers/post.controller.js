const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const sharp = require("sharp")
const postModel = require("../models/posts.model");
const likeModel = require('../models/likes.model');
const userModel = require("../models/users.model");
const commentModel = require('../models/comments.model');

async function createPostController(req, res) {
    const { caption } = req.body
    const user = req.user.id

    const fileResize = await sharp(req.file.buffer).resize({ width: 1080 }).jpeg({ quality: 80 }).toBuffer()

    const client = new ImageKit({
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY
    });

    const upload = await client.files.upload({
        file: await toFile(Buffer.from(fileResize), 'file'),
        fileName: 'post',
        folder: "pictogram"
    })

    const post = await postModel.create({
        imgUrl: upload.url,
        caption,
        user
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
}

async function likePostController(req, res) {
    let user = req.user.id;
    let post = req.params.id;

    const postExists = await postModel.exists({ _id: post })

    if (!postExists) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    try {
        await likeModel.create({
            user,
            post
        })
        res.status(201).json({
            message: "Post liked successfully"
        })
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({
                message: "Post already liked"
            })
        }
    }

}

async function unlikePostController(req, res) {
    let user = req.user.id;
    let post = req.params.id

    const postExists = await postModel.exists({ _id: post })


    if (!postExists) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    const result = await likeModel.deleteOne({ user, post });

    if (result.deletedCount === 0) {
        return res.status(404).json({
            message: "Post not liked yet"
        });
    }

    return res.status(200).json({
        message: "Post unliked successfully"
    });

}

async function getFeedController(req, res) {
    const user = req.user.id

    const posts = await postModel.find().sort({createdAt: -1}).populate("user")

    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
}

async function commentController(req, res) {
    const user = req.user.id
    const post = req.params.id
    const { comment } = req.body

    const postExists = await postModel.exists({ _id: post })

    if (!postExists) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    if (!comment || !comment.trim()) {
        return res.status(400).json({ message: "Comment cannot be empty" });
    }

    const newComment = await commentModel.create({
        comment,
        post,
        user
    })

    res.status(201).json({
        message: "User commented successfully",
        newComment
    })
}

module.exports = {
    createPostController, getFeedController, likePostController, unlikePostController, commentController
}