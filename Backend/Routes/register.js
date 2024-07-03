const express = require('express');
const router = express.Router();
const {register} = require('../Controllers/Register.js');
router.post('/Createstudent', register);
module.exports = router; 