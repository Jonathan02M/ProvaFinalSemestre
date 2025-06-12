const controller = require('../controllers/orderItemController');
// const order = require('../models/order');

class OrderItemApi {
    
    async createOrderItem(req, res) {
        const idOrder = req.body.idOrder
        const idProduct = req.body.idProduct

        try {
            const orderItem = await controller.createOrderItem( idOrder, idProduct);
            return res.status(201).send(orderItem);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterOrderItem(req, res) {
        const { id } = req.params;
        const { idOrder } = req.body;
        const { idProduct } = req.body;

        try {
            const orderItem = await controller.alterOrderItem(Number(id), idOrder, idProduct);
            return res.status(200).send(orderItem);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deleteOrderItem(req, res) {
        const { id } = req.params;

        try {
            await controller.deleteOrderItem(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listOrderItem(req, res) {

        try {
            const orderItem = await controller.listOrderItem();
            return res.status(200).send(orderItem);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new OrderItemApi();
