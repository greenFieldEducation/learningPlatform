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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
        type: DataTypes.ENUM('Men', 'Women'),
        allowNull: false,
      },
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
