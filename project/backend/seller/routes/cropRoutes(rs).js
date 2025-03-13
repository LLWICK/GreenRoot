const express = require('express');
const router = express.Router();

const {
    getCropsByCategory,
    getAllcrops
  }  = require( "../controller/cropController(rs)");


// Route to get all crops filtered by category
router.get('/', getAllcrops);
router.get('/catagory',getCropsByCategory)

module.exports = router;
