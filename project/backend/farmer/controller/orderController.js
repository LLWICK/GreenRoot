const mongoose = require("mongoose");

const ORDER = require("../../seller/model/bulkOrderModel");

//Get all Orders

const allOrders = async (req, res) => {
  try {
    const order = await ORDER.find({});

    if (!order) {
      res.status(404).json({ msg: "unsuccess" });
      return;
    }

    res.status(200).json({ msg: "Success", data: order });
  } catch (e) {
    res.status(500).json({ msg: "Server error", error: e.message });
  }
};

//get cat accoding to the parameters

const OrdersByParams = async (req, res) => {
  try {
    const order = await ORDER.find(req.body);

    if (order.length <= 0) {
      res.status(404).json({ msg: "Not found!" });
      return;
    }

    res.status(200).json({ msg: "Success", data: order });
  } catch (e) {
    res.status(500).json({ msg: "Server error", error: e.message });
  }
};

//Get a single category

const OrdersById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await ORDER.findById(id);
    if (!order) {
      res.status(404).json({ msg: "Category not found!" });

      return;
    }

    res.status(200).json({ msg: "Success", data: order });
  } catch (e) {
    res.status(500).json({ msg: "Server error", error: e.message });
  }
};

//Update category

const updateOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await ORDER.findByIdAndUpdate(id, req.body, { new: true });
    if (!order) {
      res.status(404).json({ msg: "Order not Updated!" });

      return;
    }

    res.status(200).json({ msg: "Update Successful", data: order });
  } catch (e) {
    res.status(500).json({ msg: "Server error", error: e.message });
  }
};

//delete category

module.exports = {
  allOrders,
  OrdersById,
  OrdersByParams,
  updateOrders,
};
