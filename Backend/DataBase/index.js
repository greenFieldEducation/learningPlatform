
const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("greenfield2", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
})

const Student = require("./Models/Students.js")
const Instructor = require("./Models/Instructor.js")
const Course = require("./Models/Courses.js")
const EnrollmentRequest = require("./Models/EnrollmentRequest.js")
const Feedback = require("./Models/Feedback.js")

Student.init(sequelize)
Instructor.init(sequelize)
Course.init(sequelize)
EnrollmentRequest.init(sequelize)
Feedback.init(sequelize)

Student.associate({ EnrollmentRequest })
Instructor.associate({ Course })
Course.associate({ Instructor, EnrollmentRequest })
EnrollmentRequest.associate({ Student, Course })

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database & tables created!")
//   })
//   .catch((error) => console.error("Unable to create tables:", error))


async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log("Connection established successfully")
  } catch (error) {
    console.log("Unable to connect to the database:", error)
  }
}

testConnection()

module.exports = sequelize
