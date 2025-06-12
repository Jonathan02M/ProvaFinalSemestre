const controller = require('../controllers/productController');
const product = require('../models/product');

class ProductApi {
    async createProduct(req, res) {
        const name = req.body.name
        const price = req.body.price
        const idCategory = req.body.idCategory

        try {
            const product = await controller.createProduct(name, price, idCategory);
            return res.status(201).send(product);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterProduct(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const { price } = req.body;
        const { idCategory } = req.body;


        try {
            const product = await controller.alterProduct(Number(id), name, price, idCategory);
            return res.status(200).send(product);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deleteProduct(req, res) {
        const { id } = req.params;

        try {
            await controller.deleteProduct(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listProduct(req, res) {

        try {
            const product = await controller.listProduct();
            return res.status(200).send(product);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new ProductApi();
