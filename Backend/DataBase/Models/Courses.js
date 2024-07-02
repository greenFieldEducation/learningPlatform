const {  DataTypes, Model } = require('sequelize');
const {sequelize} = require ('../index.js')
const Courses = sequelize.define("course", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Courses;