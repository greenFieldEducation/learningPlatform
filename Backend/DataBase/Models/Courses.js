const { DataTypes } = require('sequelize');
const sequelize = require('../index');
const Instructor = require('./Instructor'); 
const EnrollmentRequest = require('./EnrollmentRequest'); 

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    category: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT,
    },
    note: {
        type: DataTypes.STRING,
    },
    instructorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Instructors',
            key: 'id',
        },
    },
}, {
    tableName: 'courses',
});

// Define Associations
Course.belongsTo(Instructor, { foreignKey: 'instructorId' });
Course.hasMany(EnrollmentRequest, { foreignKey: 'courseId' });

module.exports = Course;
