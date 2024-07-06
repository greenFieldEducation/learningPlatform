const Instructor = require('../DataBase/Models/Instructor');
const Course = require('../DataBase/Models/Courses');
const {cloudinary} = require('../Cloudinary/Cloudinary.js');

const createInstructor = async (req, res) => {
    try {
        const instructor = await Instructor.create(req.body);
        res.status(201).json(instructor);
        console.log(instructor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.findAll();
        res.status(200).json(instructors);
        console.log(instructors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateInstructorProfile = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const instructor = await Instructor.findByPk(id);
        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }

        await instructor.update(updateData);
        res.status(200).json({ message: 'Profile updated successfully', instructor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const uploadProfileImage = async (req, res) => {
    const { id } = req.params;

    try {
        const instructor = await Instructor.findByPk(id);
        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            instructor.image = result.secure_url;
            await instructor.save();
            res.status(200).json({ message: 'Profile image uploaded successfully', instructor });
        } else {
            res.status(400).json({ message: 'No image file uploaded' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


 const deleteCourse= async (req,res)=>{
    const { instructorId, courseId } = req.params;
    try {
        const course = await Course.findOne({
            where: {
                id: courseId,
                instructorId: instructorId
            }
        });
        if (!course) {
            return res.status(404).json({ message: 'Course not found ' });
        }

        await course.destroy();
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const UpdateCourse = async (req, res) => {
    const { instructorId, courseId } = req.params;
    const updateData = req.body;

    try {
        const course = await Course.findOne({
            where: {
                id: courseId,
                instructorId: instructorId
            }
        });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.update(updateData);
        res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




module.exports = {
    createInstructor,
    getAllInstructors,
    updateInstructorProfile,
    uploadProfileImage ,
    deleteCourse,
    UpdateCourse
};
