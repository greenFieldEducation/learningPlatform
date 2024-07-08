const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../DataBase/Models/Students.js');
const Instructor = require('../DataBase/Models/Instructor.js');
const verifyToken = require('./MiddlewareJWT.js');
const { body, check, validationResult } = require('express-validator')
const cloudinary = require('../Cloudinary/Cloudinary.js')

const SECRET_KEY = "Learniverse"
exports.register  = [
    body('username').isLength({ min: 7 }).withMessage('Username must be longer than 6 charactersb',console.log(body)),
    body('email')
        .isEmail().withMessage('Email must be valid')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage('Email must be a valid email address format'),
    body('password')
        .isLength({ min: 7 }).withMessage('Password must be longer than 6 characters')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter b')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letterb')
        .matches(/[0-9]/).withMessage('Password must contain at least one digitb')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special characterb',console.log(body)),
    body('gender').notEmpty().withMessage('Gender is required'),
    body('phone').isLength({ min: 8 }).withMessage('Phone number must be longer than 7 digitsb',console.log(body)),
    body('role').custom((value, { req }) => {
        if (value === 'student' && !req.body.fields) {
            throw new Error('Field is required for students');
        }
        return true;
    }),
    body('username').custom(async (value) => {
        const student = await Student.findOne({ where: { username: value } });
        const instructor = await Instructor.findOne({ where: { username: value } });
        if (student || instructor) {
            throw new Error('Username already in use');
        }
        return true;
    }),
    body('email').custom(async (value) => {
        const student = await Student.findOne({ where: { email: value } });
        const instructor = await Instructor.findOne({ where: { email: value } });
        if (student || instructor) {
            throw new Error('Email already in use');
        }
        return true;
    }),


 async (req, res) => {
    console.log('Received register request:', req.body); // Log request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Validation errors:', errors.array()); // Log validation errors
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, role, phone, gender, fields } = req.body;

    try {
        let existingUser = await Student.findOne({ where: { username } }) || await Instructor.findOne({ where: { username } });
        if (existingUser) {
            console.log('Username already in use'); // Log existing username case
            return res.status(400).json( { username: 'Username already in use' } );
        }
         existingUser = await Student.findOne({ where: { email } }) || await Instructor.findOne({ where: { email } });
        if (existingUser) {
            console.log('Email already in use'); // Log existing email case
            return res.status(400).json({ errors: [{ msg: "Email already in use", param: "email" }] });
        }

        

        const validRoles = ["student", "instructor"];
        if (!validRoles.includes(role)) {
            console.log('Invalid role'); // Log invalid role case
            return res.status(400).json({ errors: [{ msg: "Invalid role", param: "role" }] });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let newUser;
        if (role === "student") {
            newUser = await Student.create({
                username,
                email,
                password: hashedPassword,
                role,
                phone,
                gender,
                fields
            });
        } else if (role === "instructor") {
            newUser = await Instructor.create({
                username,
                email,
                password: hashedPassword,
                role,
                phone,
                gender,
            });
        }

        console.log('User registered successfully:', newUser); // Log successful registration
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error('Server error:', error); // Log server error
        res.status(500).json({ errors: [{ msg: "Server error", param: "general" }] });
    }
}]

exports.login = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user;
            const student = await Student.findOne({ where: { email } });
            const instructor = await Instructor.findOne({ where: { email } });

            if (student) {
                user = student;
            } else if (instructor) {
                user = instructor;
            } else {
                return res.status(400).json({ msg: "Incorrect Email" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Incorrect password" });
            }

            const payload = {
                user: {
                    id: user.id,
                    role: user.role,
                }
               
            }


            jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
                if (err) throw err;
                res.json({ token, role: user.role , id :user.id});
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
];
exports.verifyToken = verifyToken;