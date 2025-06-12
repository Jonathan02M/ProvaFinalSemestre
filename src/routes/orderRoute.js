const express = require('express');
const router = express.Router();
const orderApi = require('../API/order');

router.post('/orders', orderApi.createOrder);
router.get('/orders', orderApi.listOrder);
router.put('/orders/:id', orderApi.alterOrder);
router.delete('/orders/:id', orderApi.deleteOrder);

module.exports = router;
