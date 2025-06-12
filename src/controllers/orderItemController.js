const OrderItem = require('../models/orderItem');

class OrderItemController {

    async createOrderItem(idOrder, idProduct) {
        if (
            idOrder === undefined
            || idProduct === undefined
        ) {
            throw new Error('ID do pedido e do produto são obrigatório!');
        }
        const orderItem = await OrderItem.create({ idOrder, idProduct });

        return orderItem;
    }

    async searchId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const orderItem = await OrderItem.findByPk(id);

        if (!orderItem) {
            throw new Error('Lista de Produtos não encontrada');
        }
        return orderItem;
    }

    async alterOrderItem(id, idOrder, idProduct) {
        if (
            id === undefined
            || idOrder === undefined
            || idProduct === undefined
        ) {
            throw new Error('Id, codigo do Pedido e codigo do Produto são obrigatórios');
        }

        const orderItem = await this.searchId(id);

        orderItem.idOrder = idOrder;
        orderItem.idProduct = idProduct;
        orderItem.save();

        return orderItem;
    }

    async deleteOrderItem(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }
        const orderItem = await this.searchId(id);

        orderItem.destroy();
    }

    async listOrderItem() {
        return OrderItem.findAll();
    }
}

module.exports = new OrderItemController();