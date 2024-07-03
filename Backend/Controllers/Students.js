const student = require('../DataBase/Models/Students')

exports.getAllStudents = async (req, res) => {
    try {
        const students = await student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createStudent = async (req, res) => {
    const { Name, Email, Favorite, Phone, Gender } = req.body;
    try {
        const student = await student.create({ Name, Email, Favorite, Phone, Gender });
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};