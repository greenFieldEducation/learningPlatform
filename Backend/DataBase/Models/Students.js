const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index.js");
const student = sequelize.define("student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Favorite: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Gender: {
    type: DataTypes.ENUM("Men", "Women"),
    allowNull: false,
  },
});

// Define Associations
student.hasMany(EnrollmentRequest, {
  as: "enrollmentRequests",
  foreignKey: "studentId",
});

module.exports = student;
