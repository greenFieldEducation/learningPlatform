'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      favorite: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM('Men', 'Women'),
        allowNull: false,
      },
      fields:{
        type: DataTypes.ENUM('Math','Economy','Management','Science','History&Geography','Art&Literature'),
        allowNull: true
        },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Students');
  }
};
