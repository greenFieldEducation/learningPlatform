const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class EnrollmentRequest extends Model {
  static init(sequelize) {
    return super.init({
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
          model: 'students',
          key: 'id',
        },
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',
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
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'studentId' });
    this.belongsTo(models.Course, { foreignKey: 'courseId' });
  }
}

module.exports = EnrollmentRequest;
