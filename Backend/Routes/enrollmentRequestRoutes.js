const express = require('express');
const router = express.Router();
const enrollmentRequestController = require('../Controllers/enrollmentRequestController.js');

// Route to create enrollment request
router.post('/enrollment-request', enrollmentRequestController.createEnrollmentRequest);

// Route to accept enrollment request
router.put('/enrollment-request/:enrollmentRequestId/:courseId/accept', enrollmentRequestController.acceptEnrollmentRequest);

module.exports = router;
