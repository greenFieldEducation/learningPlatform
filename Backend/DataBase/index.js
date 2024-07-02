const { Sequelize } = require  ('sequelize');


const sequelize = new Sequelize('GreenField2','root','root',{
    host:'localhost',
    dialect:'mysql'
});

async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log("connection established succefully")
    } catch (error){
        console.log("unable to connect to database")
    }
}

testConnection();

module.exports=sequelize;