const express = require('express');
const { createInstructor, getAllInstructors, updateInstructorProfile, uploadProfileImage } = require('../Controllers/Instructor');
const { createCourse } = require("../Controllers/Courses");
const multer = require('multer');
const { storage } = require('../Cloudinary/Cloudinary.js');
const upload = multer({ storage });

const router = express.Router();

router.post('/instructors', createInstructor);
router.get('/instructors', getAllInstructors);
router.post('/instructors/:instructorId/createCourse', createCourse);
router.put('/instructors/:id', updateInstructorProfile);
router.post('/instructors/:id/upload-image', upload.single('image'), uploadProfileImage);

module.exports = router;
