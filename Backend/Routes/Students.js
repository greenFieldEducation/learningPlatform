const express = require('express');
const router = express.Router();
const { createStudent, getAllStudents, uploadProfileImage } = require('../Controllers/Students.js');
const multer = require('multer');
const { storage } = require('../Cloudinary/Cloudinary.js');
const upload = multer({ storage });

router.get('/allstudents', getAllStudents);
router.post('/createstudent', createStudent);
router.post('/students/:id/upload-image', upload.single('image'), uploadProfileImage);


module.exports = router;
