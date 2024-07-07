// Routes/enrollmentRequestRoutes.js
const express = require('express');
const router = express.Router();
const { createEnrollmentRequest, acceptEnrollmentRequest } = require('../Controllers/enrollmentRequestController.js');

// Route to create enrollment request
router.post('/enrollment-request/create', createEnrollmentRequest);

// Route to accept enrollment request
router.put('/enrollment-request/:enrollmentRequestId/accept', acceptEnrollmentRequest);

module.exports = router;
