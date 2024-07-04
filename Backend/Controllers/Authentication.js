const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cloudinary = require('../Cloudinary/Cloudinary.js')
const { check, validationResult } = require('express-validator')
const Student = require('../DataBase/Models/Students.js')
const Instructor = require('../DataBase/Models/Instructor.js')
const verifyToken = require('./MiddlewareJWT.js')

const SECRET_KEY = "Learniverse"

exports.register = async (req, res) => {
    const { username, email, password, role, phone, gender } = req.body
    try {
        let existingUser
        if (role === "student") {
            existingUser = await Student.findOne({ where: { email } })
        } else if (role === "instructor") {
            existingUser = await Instructor.findOne({ where: { email } })
        }

        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" })
        }

        const validRoles = ["student", "instructor"]
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: "Invalid role" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Uploading the image to Cloudinary
        let imageUrl = ''
        const uploadResult = await cloudinary.uploader.upload(req.body.image, {
            folder: 'learniverse_users'
        })
        console.log(uploadResult)
        imageUrl = uploadResult.secure_url

        let newUser
        if (role === "student") {
            newUser = await Student.create({
                username,
                email,
                password: hashedPassword,
                role,
                image: imageUrl,
                phone,
                gender,
            })
        } else if (role === "instructor") {
            newUser = await Instructor.create({
                username,
                email,
                password: hashedPassword,
                role,
                image: imageUrl,
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

exports.verifyToken = verifyToken
