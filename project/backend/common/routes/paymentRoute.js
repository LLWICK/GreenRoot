const express = require("express");
const Route = express.Router();

const { checkout } = require("../controller/paymentController");

Route.post("/", checkout);

module.exports = Route;
