const express = require('express');
const router = express.Router();
const { getFieldByFarmerID } = require('../controller/sellerFarmersMap'); // Adjust path

// GET one field by farmerID
router.get('/api/fields/:farmerID', getFieldByFarmerID);

module.exports = router;
