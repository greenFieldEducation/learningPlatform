const Instructor = require('../DataBase/Models/Instructor');

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

module.exports = {
    createInstructor,
    getAllInstructors,
    updateInstructorProfile  
};
