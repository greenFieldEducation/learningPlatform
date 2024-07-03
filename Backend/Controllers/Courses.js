const Courses = require('../models/Courses');


async function createCourse(req, res) {
    try {
        const newCourse = await Courses.create(req.body)
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function getAllCourses(req, res) {
    try {
        const courses = await Courses.findAll()
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {createCourse,getAllCourses}