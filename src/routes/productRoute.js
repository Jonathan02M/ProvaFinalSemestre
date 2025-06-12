const express = require('express');
const router = express.Router();
const productApi = require('../API/product');

router.post('/products', productApi.createProduct);
router.get('/products', productApi.listProduct);
router.put('/products/:id', productApi.alterProduct);
router.delete('/products/:id', productApi.deleteProduct);

module.exports = router;
