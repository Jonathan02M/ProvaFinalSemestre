const controller = require('../controllers/categoryController');
const category = require('../models/category');

class CategoryApi {
    async createCategory(req, res) {
        const name = req.body.name

        try {
            const category = await controller.createCategory(name);
            return res.status(201).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterCategory(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        try {
            const category = await controller.alterCategory(Number(id), name);
            return res.status(200).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deleteCategory(req, res) {
        const { id } = req.params;

        try {
            await controller.deleteCategory(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listCategory(req, res) {

        try {
            const category = await controller.listCategory();
            return res.status(200).send(category);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new CategoryApi();
