const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('greenfield2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    // define: {
    //     timestamps: false,
    //   },
});

// sequelize.sync({force: true}) 
//   .then(() => {
//     console.log('Database & tables created!');
//   })
//   .catch(error => console.error('Unable to create tables:', error));

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection established successfully");
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
}

testConnection();

module.exports = sequelize;
