const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

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

//get Orders accoding to the parameters

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

//Get a single Orders

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

//Update Orders

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

//email conformation
const emailSender = (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "linwick679@gmail.com",
      pass: "lgzqwjvnzblgppwu",
    },
  });

  let mailOptions = {
    from: "linwick679@gmail.com",
    to: "wicrama123@gmail.com",
    subject: "Greenroot Test email",
    text: "Greenroot order management",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ state: "Not sent", msg: error });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ state: "Email sent", msg: info.response });
    }
  });
};

module.exports = {
  allOrders,
  OrdersById,
  OrdersByParams,
  updateOrders,
  emailSender,
};
