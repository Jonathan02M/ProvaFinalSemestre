const database = require('../config/database');

const Product = database.define('products', {
    id: {
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: database.Sequelize.STRING
    },
    price: {
        type: database.Sequelize.FLOAT
    },
    idCategory: {
        type: database.Sequelize.INTEGER
    },
});

module.exports = Product;
