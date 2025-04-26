const express = require('express');
const router = express.Router();
const { getAcceptedOrders,updateOrderStatus } = require('../controller/DiliveryGuyController');

router.get('/accepted', getAcceptedOrders);
router.put('/update-status', updateOrderStatus);

module.exports = router;
