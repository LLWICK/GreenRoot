const express = require("express");
const router = express.Router();
const { placeOrder,getOrders} = require("../controller/bulkOrderController"); // Import the controller function


// Route to place a bulk order
router.post("/placeOrder", placeOrder);
router.get("/getOrders/:sellerID", getOrders);  // This will handle POST requests to place bulk orders

module.exports = router;
