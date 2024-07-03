const { DataTypes } = require('sequelize');
const sequelize = require('../index');
// console.log(sequelize,"hello")

const Instructor = sequelize.define('Instructor', {
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
        type: DataTypes.ENUM,
        values: ['Men', 'Women'],
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
module.exports = Instructor;
