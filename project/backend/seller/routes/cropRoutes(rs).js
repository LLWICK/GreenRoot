const express = require('express');
const router = express.Router();

const {
    getCropsByCategory,
    getAllcrops
  }  = require( "../controller/cropController(rs)");


// Route to get all crops filtered by category
router.get('/', getAllcrops);
router.get('/category/:cid',getCropsByCategory)

module.exports = router;
