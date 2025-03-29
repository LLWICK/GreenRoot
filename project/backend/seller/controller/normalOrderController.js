const Order = require('../models/orderModel'); // Import your Order model

// Fetch all orders or filter by Retailer_ID, ordinary_buyer_id, or status
const getNormalOrders = async (req, res) => {
    try {
        const { retailerId, buyerId, status } = req.query;
        let filter = {};

        if (retailerId) filter.Retailer_ID = retailerId;
        if (buyerId) filter.ordinary_buyer_id = buyerId;
        if (status) filter.status = status;

        const orders = await Order.find(filter);
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

// Fetch a single order by ID
const getNormalOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

module.exports = { getNormalOrders, getNormalOrderById };
