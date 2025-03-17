const express = require("express");
const router = express.Router();
const order = require("../model/orderModel");

//Get all orders
router.get("/", (req, res) => {});

//Get order by ID/get single order

//Create a new order
router.post("/", async (req, res) => {
  const {
    orderID,
    status,
    placement_date,
    ordinary_buyer_id,
    Retailer_ID,
    Quantity,
    Address,
    payment,
  } = req.body;

  try {
    const newOrder = await order.create({
      orderID,
      status,
      placement_date,
      ordinary_buyer_id,
      Retailer_ID,
      Quantity,
      Address,
      payment,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Delete an order

//update an order

module.exports = router;
