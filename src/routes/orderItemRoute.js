const express = require('express');
const router = express.Router();
const orderItemApi = require('../API/orderItem');

router.post('/orderItem', orderItemApi.createOrderItem);
router.get('/orders/:id/items', orderItemApi.listOrderItem);
router.put('/orderItem/:id', orderItemApi.alterOrderItem);
router.delete('/orderItem/:id', orderItemApi.deleteOrderItem);

module.exports = router;
