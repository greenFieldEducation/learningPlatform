const { ENUM } = require("sequelize");
const Instructor = require("./Instructor");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM,
        values:["student","instructor"]
      }
    });
  
    return User;
  };