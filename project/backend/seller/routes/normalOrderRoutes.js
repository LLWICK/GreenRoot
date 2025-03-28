const express = require('express');
const { getOrders, getOrderById } = require('../controllers/orderController');

const router = express.Router();

// Route to fetch all orders (with optional filtering)
router.get('/', getOrders);

// Route to fetch a specific order by ID
router.get('/:id', getOrderById);

module.exports = router;
