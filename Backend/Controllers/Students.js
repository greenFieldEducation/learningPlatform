const Student = require('../DataBase/Models/Students.js')
const {cloudinary} = require("../Cloudinary/Cloudinary.js")

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll()
        res.status(200).json(students);
    } catch (error) {
      console.log(error)
        res.status(500).json({ error: error.message });
    }
};
exports.createStudent = async (req, res) => {
    const { username, email, password, gender, phone,fields,role } = req.body;
    try {
        const student = await Student.create({ username, email, password, gender, phone,fields,role });
        res.status(201).json(student);
    } catch (error) {
      console.log(error)
        res.status(400).json({ error: error.message });
    }
};

exports.uploadProfileImage =async (req, res) => {
    const { id } = req.params;
  
    try {
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        student.image = result.secure_url;
        await student.save();
        res.status(200).json({ message: 'Profile image uploaded successfully', student });
      } else {
        res.status(400).json({ message: 'No image file uploaded' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
