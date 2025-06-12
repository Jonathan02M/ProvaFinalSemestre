const database = require('../config/database');
const Order = require('./order');
const Product = require('./product');

const OrderItems = database.define('order_items', {
    id: {
        type: database.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idOrder: {
        type: database.Sequelize.INTEGER,
        references: {
            model: Order,
            key: 'id'
        }
    },
    idProduct: {
        type: database.Sequelize.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
});

OrderItems.belongsTo(Order, {
    foreignKey: 'idOrder',
    as: 'order'
});

OrderItems.belongsTo(Product, {
    foreignKey: 'idProduct',
    as: 'product'
});

module.exports = OrderItems;
