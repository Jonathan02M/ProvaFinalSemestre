const Order = require('../models/order');

class OrderController {

    async createOrder(idUser) {
        if (
            idUser === undefined
        ) {
            throw new Error('ID do usuario é obrigatório!');
        }
        const order = await Order.create({ idUser });

        return order;
    }

    async searchId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const order = await Order.findByPk(id);

        if (!order) {
            throw new Error('Pedido não encontrado');
        }
        return order;
    }

    async alterOrder(id, idUser) {
        if (
            id === undefined
            || idUser === undefined
        ) {
            throw new Error('Id e codigo do usuario são obrigatórios');
        }

        const order = await this.searchId(id);

        order.idUser = idUser;
        order.save();

        return order;
    }

    async deleteOrder(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }
        const order = await this.searchId(id);

        order.destroy();
    }

    async listOrder() {
        return Order.findAll();
    }
}

module.exports = new OrderController();