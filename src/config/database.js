const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_restfull', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
