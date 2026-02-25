const express = require('express')
const authController = require("../controllers/auth.controller")
const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @description This route is used for Registering user
 */

authRouter.post("/register", authController.registerController)

/**
 * @route POST /api/auth/login
 * @description This route is used for Login user
 */

authRouter.post("/login", authController.loginController)

module.exports = authRouter