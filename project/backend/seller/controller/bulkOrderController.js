const Order = require("../model/bulkOrderModel"); // Import your Order model
const Cart = require("../model/cartModel");   // Import your Cart model
const Crop = require("../../farmer/model/cropModel");   // Import your Crop model
const {clearCart} = require("./cartController")

// Function to place an order
const placeOrder = async (req, res) => {
  const { userId, cartId, totalPrice, items } = req.body;

  try {
    // Log incoming data for debugging
    console.log('Request Body:', req.body);
    
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items in the order.' });
    }

    const cropId = items[0].cropId;

    // Fetch the crop document to get the farmerId
    const crop = await Crop.findById(cropId);
    if (!crop) {
      return res.status(404).json({ error: 'Crop not found' });
    }

    const farmerId = crop.farmerID;  // Get the farmerId from the crop document

    // Log seller and farmer information
    console.log('Seller ID:', userId);
    console.log('Farmer ID:', farmerId);
    console.log('crop ID:', cropId);

    // Create the bulk order in your database
    const newOrder = new Order({
      sellerId: userId,  // The seller of the items in the cart
      farmerId: farmerId,  // The farmer supplying the crops
      items: items.map(item => ({
        cropId: item.cropId,  // Store the full cropId
        name: item.name,
        price: item.price,
        subtotal: item.subtotal,
      })),
      totalPrice: totalPrice,
      paymentAmount: totalPrice, // Assuming the payment amount equals the total price
      paymentStatus: "Completed", // Assuming the payment is successful
      status: "Processing", // Initial status
      createdAt: new Date(),
    });

    // Log the order to ensure it has the correct structure
    console.log('New Order:', newOrder);

    // Save the bulk order to the database
    await newOrder.save();
    console.log('Order saved successfully:', newOrder);

    // Clear the cart after placing the order
    //await Cart.deleteOne({ _id: cartId });

    // ✅ Call clearCart function manually
    const fakeReq = { params: { sellerId: userId } }; // Create a fake request object
    const fakeRes = {
      status: (code) => ({
        json: (data) => console.log(`Clear Cart Response: ${code}`, data),
      }),
    };
    await clearCart(fakeReq, fakeRes);


    res.json({ success: true, orderId: newOrder._id });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: error.message });
  }
};

// Function to get orders based on different criteria (e.g., by seller or by customer)
const getOrders = async (req, res) => {
  const sellerID = req.params.sellerID;
  console.log(sellerID)
  try {
    if (!sellerID) {
      return res.status(400).json({ error: 'Seller ID is required.' });
    }

    // Fetch the bulk orders for the seller
    const orders = await Order.find({ sellerId: sellerID });
    console.log(orders)

    // If no orders found for the seller
    if (orders.length === 0) {
      return res.status(404).json({ error: 'No orders found for this seller.' });
    }

    // Return the list of orders
    res.json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { placeOrder, getOrders };
