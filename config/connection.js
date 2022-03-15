// import the sequelize package from library
const Sequelize = require('sequelize');

// production environment variables
require('dotenv').config();

// create the connection to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;