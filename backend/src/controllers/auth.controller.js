const userModel = require("../models/users.model")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

async function registerController(req, res) {
    const { username, email, password, bio } = req.body

    const isUserExist = await userModel.findOne({
        $or: [
            { username }, { email }
        ]
    })

    if (isUserExist) {
        return res.status(400).json({
            message: "User with such email or username already exist"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio
    })

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username
        }
    })
}

async function loginController(req, res) {
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            { username }, { email }
        ]
    }).select("+password")

    if (!user) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }

    const confirmPassword = await bcrypt.compare(password, user.password)

    if (!confirmPassword) {
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)

    res.status(200).json({
        message: "User Logged In Successfully",
        user: {
            id: user._id,
            username
        }
    })
}

async function getMeController(req, res) {
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message: "User details fetched successfully",
        user
    })
}

module.exports = {
    registerController,
    loginController,
    getMeController
}