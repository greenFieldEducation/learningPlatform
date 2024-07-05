const express = require('express');
const router = express.Router();
const getAllFeedbacks = require('../Controllers/Feedback.js');

router.get('/getAllFeedbacks', getAllFeedbacks);

module.exports = router;