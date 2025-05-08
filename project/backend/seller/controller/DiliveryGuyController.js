const BulkOrder = require('../model/bulkOrderModel'); // Adjust the path as necessary

// Controller to get orders filtered by status 'accepted'
const getAcceptedOrders = async (req, res) => {
  try {
    const acceptedOrders = await BulkOrder.find({ status: 'accepted' })
      //.populate('sellerId', 'name email')   // optional: populate seller details
      //.populate('farmerId', 'name email');  // optional: populate farmer details

    res.status(200).json(acceptedOrders);
  } catch (error) {
    console.error('Error fetching accepted orders:', error);
    res.status(500).json({ message: 'Server error while fetching accepted orders' });
  }
};


const updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
  
    // Validate inputs
    if (!orderId || !status) {
      return res.status(400).json({ message: 'Order ID and status are required.' });
    }
  
    try {
      const updatedOrder = await BulkOrder.findByIdAndUpdate(
        orderId,
        { status },
        { new: true } // return the updated document
      );
  
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found.' });
      }

      const user = await User.findById(userId);
  
      res.status(200).json({
        message: 'Order status updated successfully.',
        order: updatedOrder,
      });
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({ message: 'Server error while updating order status.' });
    }
  };

module.exports = { getAcceptedOrders ,updateOrderStatus};
