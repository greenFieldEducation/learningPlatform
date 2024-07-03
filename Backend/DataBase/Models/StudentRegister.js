const { Sequelize, DataTypes } = require("sequelize");
const sequelize=require('../index.js')
const studentlogin = sequelize.define("studentlogin", {

    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
    email:{
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email must be unique"
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email is required"
          },
          notEmpty: {
            msg: "Email is required"
          },
          isEmail: {
            msg: "Invalid email format"
          }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        trim:true,
        validate: {
          notNull: {
            msg: "Password is required"
          },
          notEmpty: {
            msg: "Password is required"
          }
        }
      }
 });
 module.exports=studentlogin
 