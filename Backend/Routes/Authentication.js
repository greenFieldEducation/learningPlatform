
const express = require('express')
const router = express.Router()
const verifyToken = require ('../Controllers/MiddlewareJWT.js')
const multer = require('multer');
const { register, login,validateRegister } = require('../Controllers/Authentication.js');

const upload = multer({ dest: 'uploads/' });

router.post('/login', login);
router.post('/register', upload.single('image'), register,validateRegister);

router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "This is a protected route" });
});

module.exports = router;
