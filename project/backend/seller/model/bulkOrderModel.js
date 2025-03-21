const mongoose = require('mongoose');

const bulkOrderSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  supplier: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], 
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BulkOrder = mongoose.model('BulkOrder', bulkOrderSchema);

module.exports = BulkOrder;