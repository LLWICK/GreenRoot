const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        orderID: {
          type: String,
          default: "0",
          required: true,
        },

        status: {
            type: String,
            required: true,
        },

        placement_date: {
            type: Date,
            default: Date.now,
            required: true,
          },
    
        ordinary_buyer_id: {
          type: String,
          required: true,
          default: "0",
        },
    
        Retailer_ID: {
          type: String,
          default: "0",
          required: false,
        },
    
        Quantity: {
          type: Number,
          default: "0",
          required: true,
        },
    
        Address: {
          type: String,
          
          required: true,
        },
        payment: {
            type: String,
            required: true,
        },
        
      },
        {
            timestamps: true,
        }   
);

const order = mongoose.model("orderModel", orderSchema);

module.exports = order;
    
