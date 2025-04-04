const dotenv = require("dotenv");
dotenv.config();

const { default: Stripe } = require("stripe");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const checkout = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "lkr",
          product_data: {
            name: "Node.js and Express book",
          },

          unit_amount: 1000 * 100,
        },
        quantity: 1,
      },

      {
        price_data: {
          currency: "lkr",
          product_data: {
            name: "My love book",
          },

          unit_amount: 300 * 100,
        },
        quantity: 2,
      },
    ],

    mode: "payment",

    shipping_address_collection: {
      allowed_countries: ["LK", "US"],
    },

    success_url: `http://localhost:5173/farmer/test`,
    cancel_url: "http://localhost:5173/farmer/test",
  });

  res.status(200).json({ data: session });
};

module.exports = { checkout };
