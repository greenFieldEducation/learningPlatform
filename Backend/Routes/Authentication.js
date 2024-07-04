const express = require('express')
const router = express.Router()
const {login,register} = require('../Controllers/Authentication.js')
const verifyToken = require ('../Controllers/MiddlewareJWT.js')

router.post('/login', login)
router.post('/register', register)
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "This is a protected route" })
})
module.exports = router
