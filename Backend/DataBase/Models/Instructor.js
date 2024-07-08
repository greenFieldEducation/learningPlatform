const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class Instructor extends Model {
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
        unique: true,
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
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "instructor"
      },
      image: {
        type: DataTypes.STRING, 
      },
    }, {
      sequelize,
      modelName: 'Instructor',
      tableName: 'instructors',
      timestamps: true,
    });
  }

  static associate(models) {
    this.hasMany(models.Course, { foreignKey: 'instructorId' });
  }
}

module.exports = Instructor;