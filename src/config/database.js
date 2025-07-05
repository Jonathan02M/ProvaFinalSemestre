const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('react_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
