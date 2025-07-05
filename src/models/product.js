const database = require('../config/database');
const Category = require('./category'); 

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
        type: database.Sequelize.INTEGER,
        references: {
            model: Category,
            key: 'id'
        },
    }});

Product.belongsTo(Category, {
    foreignKey: 'idCategory',
    as: 'category'
});

module.exports = Product;