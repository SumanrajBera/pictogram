const jwt = require("jsonwebtoken")

function identifyUser(req, res, next) {
    let token = req.cookies.token
    let decoded = null

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized! No token provided"
        });
    }

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized! Token is invalid"
        })
    }

    req.user = decoded

    next()
}

module.exports = identifyUser