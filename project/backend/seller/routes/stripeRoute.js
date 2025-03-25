const express = require('express');
const router = express.Router();

const {
    createCheckoutSession
  }  = require( "../controller/paymentStripeController");


// Route to get all crops filtered by category
router.post('/', createCheckoutSession);


module.exports = router;
