const express = require('express');
const router = express.Router();
const {getCourseById,createCourse,getAllCourses} = require('../Controllers/Courses');

router.post('/createCourse', createCourse);
router.get('/getAllCourses', getAllCourses);
router.get('/course/:courseId',getCourseById); 
module.exports = router;
