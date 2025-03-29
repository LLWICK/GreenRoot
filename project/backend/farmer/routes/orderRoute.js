const express = require("express");
const Route = express.Router();

const {
  allOrders,
  OrdersById,
  OrdersByParams,
  updateOrders,
} = require("../controller/orderController");

Route.get("/", allOrders);
Route.get("/:id", OrdersById);
Route.post("/parameters", OrdersByParams);
Route.patch("/:id", updateOrders);

module.exports = Route;
