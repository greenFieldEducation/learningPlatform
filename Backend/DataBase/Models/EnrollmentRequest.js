const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index.js'); 
const Student = require('./Students.js');
const Course = require('./Courses.js');

class EnrollmentRequest extends Model {}

EnrollmentRequest.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Course,
      key: 'id',
    },
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
    defaultValue: 'pending',
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'EnrollmentRequest',
  tableName: 'enrollment_requests',
  timestamps: true,
});

EnrollmentRequest.belongsTo(Student, { foreignKey: 'studentId' });
EnrollmentRequest.belongsTo(Course, { foreignKey: 'courseId' });
Student.hasMany(EnrollmentRequest, { foreignKey: 'studentId' });
Course.hasMany(EnrollmentRequest, { foreignKey: 'courseId' });

module.exports = EnrollmentRequest;
