const { DataTypes } = require('sequelize');
const sequelize = require('../index.js'); 
const Instructor = require('./Instructor.js'); 

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instructorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Instructor,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Course',
  tableName: 'courses',
});

// Establishing associations
Course.belongsTo(Instructor, { foreignKey: 'instructorId' });
Instructor.hasMany(Course, { foreignKey: 'instructorId' });

module.exports = Course;
