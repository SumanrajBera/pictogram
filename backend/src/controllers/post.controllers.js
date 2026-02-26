const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const sharp = require("sharp")
const postModel = require("../models/posts.model")

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

module.exports = {
    createPostController
}