const database = require('../config/database');
const { DataTypes } = require('sequelize');
const Order = require('./order');
const Product = require('./product');

const OrderItem = database.define('orderItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idOrder: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProduct: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

OrderItem.belongsTo(Order, {
    foreignKey: 'idOrder',
    as: 'order'
});

OrderItem.belongsTo(Product, {
    foreignKey: 'idProduct',
    as: 'product'
});

Order.hasMany(OrderItem, {
    foreignKey: 'idOrder',
    as: 'orderItems'
});

module.exports = OrderItem;
