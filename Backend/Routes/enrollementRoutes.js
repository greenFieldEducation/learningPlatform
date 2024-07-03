const express = require('express');
const router = express.Router();
const enrollmentController = require('../Controllers/enrollmentController');

router.post('/enroll', enrollmentController.enrollStudent);

module.exports = router;
