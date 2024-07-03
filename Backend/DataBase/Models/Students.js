const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index.js");
const EnrollmentRequest = require ('./EnrollmentRequest.js')
const Student = sequelize.define("Student", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favorite: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM("Men", "Women"),
    allowNull: false,
  },
});

// Define Associations
// student.hasMany(EnrollmentRequest, {
//   as: "enrollmentRequests",
//   foreignKey: "studentId",
// });

module.exports = Student;
