const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('movies', 'admin', 'admin', {
    dialect: 'postgres'
});

module.exports = sequelize
