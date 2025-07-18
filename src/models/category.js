const database = require('../config/database');

class Category {
    constructor() {
        this.model = database.define('categorys', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.Sequelize.STRING
            },
        });
    }
}

module.exports = (new Category).model;
