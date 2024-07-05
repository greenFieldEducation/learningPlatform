require('dotenv').config();

const express = require("express")
const app = express()
const PORT = 5000
const cors = require('cors')
const multer = require('multer')
const db = require("../DataBase/index.js")
const studentrouter = require("../Routes/Students.js")
const instructorRoutes = require('../Routes/Instructor')
const authenticationRoutes = require('../Routes/Authentication.js')
const feedbackRoutes = require('../Routes/Feedback.js')
const subscriptionRoutes = require('../Routes/subscriptionRoutes.js');
const enrollmentRequestRoutes = require('../Routes/subscriptionRoutes.js');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/authentication', authenticationRoutes)
app.use('/api/feedbacks', feedbackRoutes)
app.use("/api/student", studentrouter)
app.use("/api", instructorRoutes)
app.use('/api', enrollementRoute)
app.use('/api', subscriptionRoutes);
app.use('/api', enrollmentRequestRoutes);
app.listen(PORT, function () {
    console.log("listening on port 5000!")
})

module.exports = app
