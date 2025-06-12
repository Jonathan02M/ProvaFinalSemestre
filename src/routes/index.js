const express = require('express');
const router = express.Router();

router.use('/', require('./userRoute'));
router.use('/', require('./categoryRoute'));
router.use('/', require('./productRoute'));
router.use('/', require('./orderRoute'));
router.use('/', require('./orderItemRoute'));

module.exports = router;
