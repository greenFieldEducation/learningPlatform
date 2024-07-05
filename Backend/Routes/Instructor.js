const express = require('express');
const { createInstructor, getAllInstructors } = require('../Controllers/Instructor');
const { createCourse } = require("../Controllers/Courses");
const { updateInstructorProfile } = require('../Controllers/Instructor');
const router = express.Router();

router.post('/instructors', createInstructor);
router.get('/instructors', getAllInstructors);
router.post('/instructors/:instructorId/createCourse', createCourse);
router.put('/instructors/:id', updateInstructorProfile); 

module.exports = router;
