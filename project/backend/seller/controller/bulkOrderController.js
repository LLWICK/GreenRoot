const Cart = require('../model/cartModel');
const Order = require('../model/bulkOrderModel'); // Assuming you have an Order model
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Place Order from Cart
const placeOrder = async (req, res) => {
  try {
    const { sellerId, paymentMethodId } = req.body; // Payment method from frontend

    // Fetch cart
    const cart = await Cart.findOne({ sellerId }).populate('items.cropId');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Get farmerId (since all items belong to the same farmer)
    const farmerId = cart.items[0].cropId.farmerID; 

    // Create Stripe Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: cart.totalPrice * 100, // Convert to cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    // Save Order
    const newOrder = new Order({
      sellerId,
      farmerId,
      items: cart.items,
      totalAmount: cart.totalPrice,
      paymentStatus: 'Paid',
      orderStatus: 'Processing',
      paymentIntentId: paymentIntent.id,
    });
    await newOrder.save();

    // Clear the cart
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: 'Order processing failed', error: err.message });
  }
};

module.exports = { placeOrder };
