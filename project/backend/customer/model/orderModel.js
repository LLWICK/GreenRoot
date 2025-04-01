const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    // {
    //     orderID: {
    //       type: String,
    //       default: "0",
    //       required: true,
    //     },

    //     status: {
    //         type: String,
    //         required: true,
    //     },

    //     placement_date: {
    //         type: Date,
    //         default: Date.now,
    //         required: true,
    //       },
    
    
    
    //     Quantity: {
    //       type: Number,
    //       default: "0",
    //       required: true,
    //     },
    
    //     Address: {
    //       type: String,
          
    //       required: true,
    //     },
    //     payment: {
    //         type: String,
    //         required: true,
    //     },
        
    //   },
    {
      totalPrice: {
        type: Number,
        required: true,
      },
      cartItems: [
        {
          name: String,
          image: String,
        
          quantity: Number,
        
          totalPrice: Number, // total price of each item
        },
      ],
      delivery: {
        type: Number,
      },
      tax: {
        type: Number,
      },
      finalTotal: {
        type: Number,
      },
      orderNumber: { // Add orderNumber field
        type: Number,
        unique: true, // Optional: Ensure order numbers are unique
      },
      status:{
        type:String,
      },
      ordinary_buyer_id: {
        type: String,
        
        default: "0",
      },
  
      Retailer_ID: {
        type: String,
       
      },

    },
        {
            timestamps: true,
        }   
);

const order = mongoose.model("orderModel", orderSchema);

module.exports = order;
    
