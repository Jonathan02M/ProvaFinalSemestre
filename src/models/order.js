const database = require('../config/database');
const { DataTypes } = require('sequelize');
const User = require('./user');

const Order = database.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',  // Nome da tabela no banco de dados
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
});

// Associação no Sequelize
Order.belongsTo(User, {
    foreignKey: 'idUser',
    as: 'user'
});

User.hasMany(Order, {
    foreignKey: 'idUser',
    as: 'orders'
});

module.exports = Order;
