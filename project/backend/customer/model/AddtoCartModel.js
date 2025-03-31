const mongoose = require('mongoose');

const AddtoCartSchema = new mongoose.Schema(
    {
        name: {
              type: String,
              required: true,
            },
        
            quantity: {
              type: Number,
              required: true,
              default: 0,
            },
             
            image: {
              type: String,
              default: "https://demofree.sirv.com/nope-not-here.jpg",
              required: true,
            },

            price:{
              type:Number,
              required:true,
          },
          totalPrice: { 
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Change the model name here
const AddtoCart = mongoose.model("addtocarts", AddtoCartSchema); // Changed 

module.exports = AddtoCart;