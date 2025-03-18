const express = require('express');
const router = express.Router();
const { createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct} = require('../controller/productController');

// Create a new product
router.post('/product', createProduct);

// Get all products
router.get('/products', getAllProducts);

// Get a product by ID
router.get('/product/:id', getProductById);

// Update a product by ID
router.put('/product/:id', updateProduct);

// Delete a product by ID
router.delete('/product/:id', deleteProduct);

module.exports = router;
