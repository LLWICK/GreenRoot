const express = require('express');
const router = express.Router();
const { getAcceptedOrders,updateOrderStatus,getAcceptedNormalOrders } = require('../controller/DiliveryGuyController');

router.get('/acceptedBlk', getAcceptedOrders);
router.get('/acceptedNor', getAcceptedNormalOrders);
router.put('/update-status', updateOrderStatus);

module.exports = router;
