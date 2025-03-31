const express = require("express");
const Route = express.Router();

const {
  allOrders,
  OrdersById,
  OrdersByParams,
  updateOrders,
  emailSender,
} = require("../controller/orderController");

Route.get("/", allOrders);
Route.get("/:id", OrdersById);
Route.post("/parameters", OrdersByParams);
Route.patch("/:id", updateOrders);
Route.post("/email", emailSender);

module.exports = Route;
