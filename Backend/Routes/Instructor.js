const express = require('express');
const { getInstructorById,UpdateCourse,deleteCourse,createInstructor, getAllInstructors, updateInstructorProfile, uploadProfileImage } = require('../Controllers/Instructor');
const { createCourse } = require("../Controllers/Courses");
const multer = require('multer');
const { storage } = require('../Cloudinary/Cloudinary.js');
const upload = multer({ storage : storage});

const router = express.Router();

router.post('/instructors', createInstructor);
router.get('/instructors', getAllInstructors);
router.get('/instructors/:id', getInstructorById);
router.post('/instructors/:instructorId/createCourse', createCourse);
router.put('/instructors/:id',updateInstructorProfile);
router.post('/instructors/:id/upload', upload.single('file'), uploadProfileImage);
router.delete('/instructors/:instructorId/courses/:courseId', deleteCourse);

router.put('/instructors/:instructorId/courses/:courseId', UpdateCourse);

module.exports = router;