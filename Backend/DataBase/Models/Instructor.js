const { DataTypes } = require("sequelize");
const sequelize = require("..");

module.exports=(sequelize,DataTypes)=>{

    const Instructor= sequelize.define("Instructor",{
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false
        },
        Gender:{
            enum : ["Men","Women"]
        },
        PhoneNumber:NUMBER,
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
          }
    })
}