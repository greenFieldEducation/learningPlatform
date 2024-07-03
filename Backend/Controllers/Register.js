const studentlogin = require('../DataBase/Models/Register.js')
const jwt = require('jsonwebtoken')



const register = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        // Check if user already exists
        const existingUser = await studentlogin.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }
        const userRole = role || 'student';

        // Validate role
        const validRoles = ['student', 'instructor'];
        if (!validRoles.includes(userRole)) {
            return res.status(400).json({ message: "Invalid role" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = await studentlogin.create({
            username,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
module.exports = {register};