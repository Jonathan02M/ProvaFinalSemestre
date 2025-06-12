const Product = require('../models/product');

class ProductController {

    async createProduct(name, price, idCategory) {
        if (
            name === undefined
            || price === undefined
            || idCategory === undefined
        ) {
            throw new Error('Nome, preço e categoria são obrigatórios!');
        }
        const product = await Product.create({ name, price, idCategory});

        return product;
    }

    async searchId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const product = await Product.findByPk(id);

        if (!product) {
            throw new Error('Produto não encontrado!');
        }
        return product;
    }

    async alterProduct(id, name, price, idCategory) {
        if (
            id === undefined
            || name === undefined
            || price === undefined
            || idCategory === undefined
        ) {
            throw new Error('Id, nome, preço e categoria são obrigatórios!');
        }

        const product = await this.searchId(id);

        product.name = name;
        product.price = price;
        product.idCategory = idCategory;
        product.save();

        return product;
    }

    async deleteProduct(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório!');
        }
        const product = await this.searchId(id);

        product.destroy();
    }

    async listProduct() {
        return Product.findAll();
    }
}

module.exports = new ProductController();