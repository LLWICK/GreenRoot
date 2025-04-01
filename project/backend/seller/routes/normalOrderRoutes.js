const express = require('express');
const { fetchOrders } = require('../controller/normalOrderCotroller');

const router = express.Router();

// Route to fetch all orders (with optional filtering)
router.get('/', fetchOrders);



module.exports = router;
