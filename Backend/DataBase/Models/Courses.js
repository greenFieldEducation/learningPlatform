const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('GreenField2','root','root',{
    host:'localhost',
    dialect:'mysql'
});

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