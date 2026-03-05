const express = require('express')
const authController = require("../controllers/auth.controller")
const authRouter = express.Router()
const identifyUser = require("../middlewares/identifyUser")

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

/**
 * @route GET /api/auth/getMe
 * @description This route is used for Login user
 */

authRouter.get("/getMe", identifyUser, authController.getMeController)

module.exports = authRouter