const { cloudinary } = require('../Cloudinary/Cloudinary');
const Course = require('../DataBase/Models/Courses')
const EnrollmentRequest= require('../DataBase/Models/EnrollmentRequest')
const Student = require('../DataBase/Models/Courses')


// Controller function to fetch all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching all students:', error);
    res.status(500).json({ error: 'Failed to fetch all students' });
  }
};

// Controller function to create a new student
const createStudent = async (req, res) => {
  const { username, email, password, gender, phone, fields, role } = req.body;
  try {
    const student = await Student.create({ username, email, password, gender, phone, fields, role });
    res.status(201).json(student);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(400).json({ error: 'Failed to create student' });
  }
};

// Controller function to upload profile image for a student
const uploadProfileImage = async (req, res) => {
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
    console.error('Error uploading profile image:', error);
    res.status(500).json({ message: 'Failed to upload profile image' });
  }
};

// Controller function to fetch a student by ID
const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    return res.status(200).json(student);
  } catch (error) {
    console.error('Error fetching student by ID:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to fetch enrolled courses for a student
const getEnrolledCourses = async (req, res) => {
  const { studentId } = req.params;

  try {
    // Fetch enrolled courses using Sequelize association
    const enrolledCourses = await Course.findAll({
      include: [
        {
          model: EnrollmentRequest,
          where: { studentId }, // Filter by studentId and accepted status
          required: false
        }
      ]
    });

    res.status(200).json(enrolledCourses);
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    res.status(500).json({ error: 'Failed to fetch enrolled courses' });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  uploadProfileImage,
  getStudentById,
  getEnrolledCourses,
};
