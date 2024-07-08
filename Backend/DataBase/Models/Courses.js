const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');
const Instructor = require('./Instructor'); 

class Course extends Model {
  static init(sequelize) {
    return super.init({
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM(
          'Math',
          'Economy',
          'Management',
          'Science',
          'History&Geography',
          'Art&Literature'
        ),
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
    }, {
      sequelize,
      modelName: 'Course',
      tableName: 'courses',
      timestamps: true,
    });
  }

  static associate(models) {
    this.belongsTo(models.Instructor, { foreignKey: 'instructorId' }); 
    this.hasMany(models.EnrollmentRequest, { foreignKey: 'courseId' });
  }
}

module.exports = Course;
