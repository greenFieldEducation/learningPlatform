const express = require('express');
const router = express.Router();
const multer = require('multer');
const { register, login, verifyToken } = require('../Controllers/Authentication.js');

const upload = multer({ dest: 'uploads/' });

router.post('/login', login);
router.post('/register', upload.single('image'), register);
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "This is a protected route" });
});

module.exports = router;
