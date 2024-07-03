const express = require('express');
const router = express.Router();
const {createStudent,getAllStudents} = require('../Controllers/Students.js');
router.get('/allstudent', getAllStudents);
router.post('/Createstudent', createStudent);
module.exports = router;
