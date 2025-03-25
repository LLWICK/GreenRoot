// checkoutController.js
const stripe = require('stripe')('sk_test_51R5p89RvsikKtmlomY1q53IlqgUCIZkj7D0hK92D8eBwm8ohWxY5X5SKKE0C7ZG4FrvoPhP2eRS6wPqSsrNImP7v00VQk26fyY');  // Make sure to load your Stripe secret key from an environment variable

// Example endpoint for handling checkout
exports.createCheckoutSession = async (req, res) => {
  try {
    const { cartItems, totalAmount } = req.body;
    console.log('Cart Items:', cartItems);
    console.log('Total Amount:', totalAmount);

    // Validate the incoming data
    if (!cartItems || cartItems.length === 0 || !totalAmount) {
      return res.status(400).json({ error: 'Invalid cart data or total amount' });
    }

    // Create an array of items for Stripe checkout session
    const line_items = cartItems.map(item => ({
      price_data: {
        currency: 'usd', // or your desired currency
        product_data: {
          name: item.name,
          images: [item.cropId.image], // Image URL from the item data
        },
        unit_amount: item.price * 100, // Stripe expects the amount in cents
      },
      quantity: item.quantity || 1,
    }));

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment', // Can be 'payment' or 'subscription'
      success_url: "http://localhost:5173/seller/home",
      cancel_url: "http://localhost:5173/seller/Inventroy",
    });

    // Send the session ID back to the client to complete the checkout
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
