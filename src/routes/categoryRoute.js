const express = require('express');
const router = express.Router();
const categoryApi = require('../API/category');

router.post('/categorys', categoryApi.createCategory);
router.get('/categorys', categoryApi.listCategory);
router.put('/categorys/:id', categoryApi.alterCategory);
router.delete('/categorys/:id', categoryApi.deleteCategory);

module.exports = router;
