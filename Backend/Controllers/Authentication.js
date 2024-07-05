const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../DataBase/Models/Students.js');
const Instructor = require('../DataBase/Models/Instructor.js');
const verifyToken = require('./MiddlewareJWT.js');
const {body, validationResult, check } = require('express-validator')
const cloudinary = require('../Cloudinary/Cloudinary.js')


const SECRET_KEY = "Learniverse"

// const validateRegister = [
//     body('username').notEmpty().withMessage('Username is required'),
//     body('email').isEmail().withMessage('Valid email is required'),
//     body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),   
// ];

    const validateRegister = [
    body('username').isLength({ min: 7 }).withMessage('Username must be longer than 6 characters'),
    body('password').isLength({ min: 7 }).withMessage('Password must be longer than 6 characters'),
    body('gender').notEmpty().withMessage('Gender is required'),
    body('phone').isLength({ min: 8 }).withMessage('Phone number must be longer than 7 digits'),
    body('username').custom(async value => {
      const user = await User.findOne({ username: value });
      if (user) {
        throw new Error('Username already in use');
      }
      return true;
    })
  ]

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password, role, phone, gender,fields } = req.body;
    try {
        let existingUser
        if (role === "student") {
            existingUser = await Student.findOne({ where: { email } })
        } else if (role === "instructor") {
            existingUser = await Instructor.findOne({ where: { email } })
        }

        if (existingUser) {

            return res.status(400).json({ message: "Username or email already in use" });
            

        }

        const validRoles = ["student", "instructor"]
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: "Invalid role" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Uploading the image to Cloudinary
        // let imageUrl = ''
        // const uploadResult = await cloudinary.uploader.upload(req.body.image, {
        //     folder: 'learniverse_users'
        // })
        // console.log(uploadResult)
        // imageUrl = uploadResult.secure_url

        let newUser
        if (role === "student") {
            newUser = await Student.create({
                username,
                email,
                password: hashedPassword,
                role,
                phone,
                gender,
                fields
            })
        } else if (role === "instructor") {
            newUser = await Instructor.create({
                username,
                email,
                password: hashedPassword,
                role,
                phone,
                gender,
            })
        }

        res.status(201).json({ message: "User registered successfully", user: newUser })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server error" })
    }
}

exports.login = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),

    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body

        try {
            let user
            const student = await Student.findOne({ where: { email } })
            const instructor = await Instructor.findOne({ where: { email } })

            if (student) {
                user = student
            } else if (instructor) {
                user = instructor
            } else {
                return res.status(400).json({ msg: "Incorrect Email" })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ msg: "Incorrect password" })
            }

            const payload = {
                user: {
                    id: user.id,
                    role: user.role,
                },
            }

            jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }, (err, token) => {
                if (err) throw err
                res.json({ token })
            })
        } catch (err) {
            console.error(err.message)
            res.status(500).send("Server error")
        }
    }
]
exports.verifyToken = verifyToken;
exports.validateRegister = validateRegister