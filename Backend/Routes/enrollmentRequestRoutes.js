// Routes/enrollmentRequestRoutes.js
const express = require('express');
const router = express.Router();
const { createEnrollmentRequest, acceptEnrollmentRequest ,getEnrollmentRequestsByCourse,rejectEnrollmentRequest } = require('../Controllers/enrollmentRequestController.js');

// Route to create enrollment request
router.post('/enrollment-request/create', createEnrollmentRequest);

// Route to accept enrollment request
router.put('/enrollment-request/:enrollmentRequestId/reject', rejectEnrollmentRequest);
router.put('/enrollment-request/:enrollmentRequestId/accept', acceptEnrollmentRequest);

router.get('/enrollment-requests/:courseId', getEnrollmentRequestsByCourse);



module.exports = router;
