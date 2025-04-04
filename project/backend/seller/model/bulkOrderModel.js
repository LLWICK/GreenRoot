const mongoose = require('mongoose');

const bulkOrderSchema = new mongoose.Schema({
  cropId: {  
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'CropModel',  
    required: true,  
  },
  sellerId: {  
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'User',  
    required: true,  
  },
  farmerId: {  
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'User',  
    required: true,  
  },
  quantity: {  
    type: Number,  
    required: true,  
    min: 1,  
  },
  totalPrice: {  
    type: Number,  
    required: true,  
  },
  status: {  
    type: String,  
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],  
    default: 'Pending',  
  },
  createdAt: {  
    type: Date,  
    default: Date.now,  
  },
});

const BulkOrder = mongoose.model('BulkOrder', bulkOrderSchema);

module.exports = BulkOrder;
