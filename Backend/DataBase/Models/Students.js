const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class Student extends Model {
  static init(sequelize) {
    return super.init({
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM('Men', 'Women'),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     fields:{
      type: DataTypes.ENUM('Math','Economy','Management','Science','History&Geography','Art&Literature'),
      allowNull: true
      },

      role: {
        type: DataTypes.STRING,
        defaultValue: "student"
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    
    }, {
      sequelize,
      modelName: 'Student',
      tableName: 'students',
      timestamps: true,
    });
  }

  static associate(models) {
    this.hasMany(models.EnrollmentRequest, { foreignKey: 'studentId' });
  }
}

module.exports = Student;
