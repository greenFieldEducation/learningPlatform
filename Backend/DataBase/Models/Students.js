const { Sequelize, DataTypes } = require("sequelize");
const sequelize=require('../index.js')
const student = sequelize.define("student", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
      Favorite: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Gender:{
        type: DataTypes.ENUM('Men', 'Women'),
        allowNull: false,
    },PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
 });
 module.exports=student
 