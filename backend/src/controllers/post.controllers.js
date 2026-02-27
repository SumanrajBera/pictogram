const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const sharp = require("sharp")
const postModel = require("../models/posts.model");
const likeModel = require('../models/likes.model');

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
    let post = req.params.id

    const alreadyLiked = await likeModel.findOne({
        user,
        post
    })

    if(alreadyLiked) {
        return res.status(409).json({
            message: "Post already liked"
        })
    }

    const like = await likeModel.create({
        user,
        post
    }) 

    res.status(201).json({
        message: "Post liked successfully"
    })
}

async function unlikePostController(req, res) {
    let user = req.user.id;
    let post = req.params.id

    await likeModel.deleteOne({
        user,
        post
    }) 

    res.status(200).json({
        message: "Post unliked successfully"
    })
}

async function getFeedController(req, res) {
    const posts = await postModel.find()

    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
}

module.exports = {
    createPostController, getFeedController, likePostController, unlikePostController
}