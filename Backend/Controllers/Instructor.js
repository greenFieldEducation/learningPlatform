const Instructor = require('../DataBase/Models/Instructor');
const createInstructor = async (req, res) => {
    try {
        const instructor = await Instructor.create(req.body);
        res.status(201).json(instructor);
        console.log(instructor)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.findAll();
        res.status(200).json(instructors);
        console.log(instructors)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createInstructor,
    getAllInstructors
};
