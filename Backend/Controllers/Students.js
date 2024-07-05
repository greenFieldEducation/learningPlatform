const student = require('../DataBase/Models/Students')

exports.getAllStudents = async (req, res) => {
    try {
        const students = await student.findAll()
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createStudent = async (req, res) => {
    try {
        const student = await student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};