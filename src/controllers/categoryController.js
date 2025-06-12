const Category = require('../models/category');

class CategoryController {

    async createCategory(name) {
        if (
            name === undefined
        ) {
            throw new Error('Nome da categoria é obrigatório!');
        }
        const category = await Category.create({ name });

        return category;
    }

    async searchId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const category = await Category.findByPk(id);

        if (!category) {
            throw new Error('Categoria não encontrada');
        }
        return category;
    }

    async alterCategory(id, name) {
        if (
            id === undefined
            || name === undefined
        ) {
            throw new Error('Id e nome são obrigatórios');
        }

        const category = await this.searchId(id);

        category.name = name;
        category.save();

        return category;
    }

    async deleteCategory(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }
        const category = await this.searchId(id);

        category.destroy();
    }

    async listCategory() {
        return Category.findAll();
    }
}

module.exports = new CategoryController();