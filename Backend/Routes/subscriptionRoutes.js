const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Route to save subscription details
router.post('/subscribe', subscriptionController.saveSubscription);

// Route to retrieve subscription details
router.get('/subscription/:instructorId', subscriptionController.getSubscription);

module.exports = router;
