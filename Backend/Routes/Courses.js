const express = require('express');
const router = express.Router();
const {createCourse,getAllCourses} = require('../Controllers/Courses');

router.post('/createCourse', createCourse);
router.get('/getAllCourses', getAllCourses);