const express = require('express');
const { createInstructor, getAllInstructors } = require('../Controllers/Instructor');

const router = express.Router();

router.post('/instructors', createInstructor);
router.get('/instructors', getAllInstructors);

module.exports = router;

