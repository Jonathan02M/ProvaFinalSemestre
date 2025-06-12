const controller = require('../controllers/orderController');
// const order = require('../models/order');

class OrderApi {
    async createOrder(req, res) {
        const idUser = req.body.idUser
        try {
            const order = await controller.createOrder(idUser);
            return res.status(201).send(order);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterOrder(req, res) {
        const { id } = req.params;
        const { idUser } = req.body;

        try {
            const order = await controller.alterOrder(Number(id), idUser);
            return res.status(200).send(order);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deleteOrder(req, res) {
        const { id } = req.params;

        try {
            await controller.deleteOrder(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listOrder(req, res) {

        try {
            const order = await controller.listOrder();
            return res.status(200).send(order);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new OrderApi();
