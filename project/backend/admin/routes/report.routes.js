const express = require('express');
const router = express.Router();
const {
    getAllQuestionsForExcel,
    getUserForExcel,
    getSalse,
    getSalesForExcel,
    getBulkOrdersOverTime,

} = require('../controller/report.controller');

router.get('/questions/excel', getAllQuestionsForExcel);

// user info excel
router.get('/user-data/excel', getUserForExcel);
// get sales
router.get('/sales/over-time', getSalse);
// get sales for excel
router.get('/sales/over-time/excel', getSalesForExcel);
// get bulk order 
router.get('/bulk-orders/over-time', getBulkOrdersOverTime);

module.exports = router;