const database = require('../config/database');

const Order = database.define('orders', {
    id: {
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: database.Sequelize.INTEGER
    },
    idOrdemItem: {
        type: database.Sequelize.INTEGER
    },
});

module.exports = Order;
